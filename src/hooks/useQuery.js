import { useRef, useState } from "react";
import { schema } from "../schema";

/**
 * Make and manage the API request
 * @param {String} type action type
 * @param {object} options schema
 * e.g. {
 *        props: String, props name which will hold server response's data,
 *        query: {key: value}, query parameter that will be suffixed with the url
 *        path: {key: value}, path parameter that will be appended in the url
 *      }
 */
export function useQuery(type, options = {}) {
  // local store
  const [store, setStore] = useState({});

  let apiSchema = schema[type];
  if (typeof apiSchema === "function") {
    apiSchema = apiSchema({});
  }

  const readProps = store[apiSchema.readProps];
  const fetchMoreOptionsRef = useRef();

  const globalConfig = (dataOptions) => {
    if (dataOptions.query) {
      dataOptions.query.apikey = process.env.REACT_APP_THE_MOVIE_DB_APP_KEY;
    }
    return dataOptions;
  };

  /**
   * Default and request specific config parameters
   * @param {object} dataOptions specific request configuration
   * @returns {object} overall configuration with default if omitted in request
   */
  const readConfig = (dataOptions) => {
    const config = { ...options, ...dataOptions };
    return globalConfig(config);
  };

  /**
   * Specific schema override default while making request
   * @param {object} dataOptions specific request configuration
   * @returns {object} schema that contains the details of bridging api request-response and store
   */
  const readAPISchema = (dataOptions) => {
    const optionConfig = readConfig(dataOptions);
    let apiSchema = schema[type];
    if (typeof apiSchema === "function") {
      apiSchema = apiSchema(optionConfig);
    }
    return apiSchema;
  };

  /**
   * API Call
   * @param {object} dataOptions specific api request configuration
   */
  const requestData = (dataOptions) => {
    const apiSchema = readAPISchema(dataOptions);
    const optionConfig = readConfig(dataOptions);
    fetchMoreOptionsRef.current = optionConfig;

    if (!apiSchema.url) {
      setStore((prevStore) => ({
        ...prevStore,
        [apiSchema.readProps]: {
          data: optionConfig.initialData,
        },
      }));
      return;
    }

    setStore((prevStore) => ({
      ...prevStore,
      [apiSchema.readProps]: {
        loading: true,
        error: false,
        data: optionConfig.updateResult ? readProps : optionConfig.initialData,
      },
    }));

    //API call
    fetch(apiSchema.url)
      .then((response) => {
        response = response.json(); // transform the data into json
        return response;
      })
      .then((response) => {
        setStore((prevStore) => ({
          ...prevStore,
          [apiSchema.readProps]: {
            loading: false,
            error: false,
            data: optionConfig.updateResult
              ? optionConfig.updateResult(readProps, response)
              : response,
          },
        }));
      })
      .catch((error) => {
        setStore((prevStore) => ({
          ...prevStore,
          [apiSchema.readProps]: {
            loading: false,
            error: true,
            data: error,
          },
        }));
      });
  };

  /**
   * Pagination
   * @param {*} options
   */
  const fetchNext = (options) => {
    const lastRequestOptionsRef = {
      ...fetchMoreOptionsRef.current.query,
      ...options.query,
    };
    options = { query: lastRequestOptionsRef };
    requestData(options);
  };

  return [readProps, requestData, fetchNext];
}
