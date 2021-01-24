import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Form,
  FormControl,
  InputGroup,
  Container,
  Button,
  Dropdown,
} from "react-bootstrap";

import { ReactComponent as SearchSvg } from "./search.svg";

import style from "./index.module.scss";

const SearchBar = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const categories = [
    { key: "All", val: "" },
    { key: "Movie", val: "movie" },
    { key: "Series", val: "series" },
    { key: "Episode", val: "episode" },
  ];

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText?.trim()) {
      onSubmit(searchText, category);
    }
  };

  const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <Button
      className={``}
      tabIndex={2}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      &#x25bc;
    </Button>
  ));

  return (
    <>
      <Form inline onSubmit={onSearchSubmit} className={"position-relative"}>
        <InputGroup>
          <Container className="pr-0">
            <FormControl
              placeholder="Search..."
              aria-label="Search..."
              aria-describedby="basic-addon2"
              className={style.search}
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              tabIndex={1}
            />
            <InputGroup.Append>
              <Button onClick={onSearchSubmit} tabIndex={3}>
                <SearchSvg />
              </Button>
            </InputGroup.Append>
          </Container>
        </InputGroup>
        <br />
        <Dropdown
          className={`position-absolute ${style.dropdown}`}
          drop="down"
          onSelect={(category) => setCategory(category)}
        >
          <Dropdown.Toggle
            as={CustomToggle}
            id="dropdown-custom-components"
          ></Dropdown.Toggle>
          <Dropdown.Menu align="right">
            {categories.map((_category) => {
              return (
                <Dropdown.Item
                  eventKey={_category.val}
                  active={category === _category.val}
                  key={_category.key}
                >
                  {_category.key}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Form>
    </>
  );
};
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
