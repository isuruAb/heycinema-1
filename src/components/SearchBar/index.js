import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Form,
  FormControl,
  InputGroup,
  Container,
  Button,
} from "react-bootstrap";

import { ReactComponent as SearchSvg } from "./search.svg";

import style from "./index.module.scss";

const SearchBar = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText?.trim()) {
      onSubmit(searchText);
    }
  };

  return (
    <Form inline onSubmit={onSearchSubmit}>
      <InputGroup>
        <Container className="pr-0">
          <FormControl
            placeholder="Search..."
            aria-label="Search..."
            aria-describedby="basic-addon2"
            className={style.search}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <InputGroup.Append>
            <Button onClick={onSearchSubmit}>
              <SearchSvg />
            </Button>
          </InputGroup.Append>
        </Container>
      </InputGroup>
    </Form>
  );
};
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
