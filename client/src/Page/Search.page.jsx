// Library
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap";

// Components
import ProductCard from "../components/ProductCard/ProductCard.component";

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  // Redux state
  const reduxState = useSelector(({ search, products }) => ({
    search,
    products,
  }));

  useEffect(
    () =>
      setSearchResult(
        reduxState.products.home.filter(({ Product_name }) =>
          Product_name.includes(reduxState.search.search)
        )
      ),
    []
  );
  useEffect(
    () =>
      setSearchResult(
        reduxState.products.home.filter(({ Product_name }) =>
          Product_name.includes(reduxState.search.search)
        )
      ),
    [reduxState.search.search]
  );

  return (
    <>
      <Container>
        <Row className="mt-3 justify-content-between border-bottom border-primary">
          {searchResult.length > 0 ? (
            <>
              <h1 className="text-primary">
                Search result for "{reduxState.search.search} "
              </h1>
            </>
          ) : (
            <>
              <h1 className="text-primary">
                No search result found for "{reduxState.search.search} "
              </h1>
            </>
          )}
        </Row>
        <Row className="justify-content-center">
          {searchResult.map((product) => (
            <ProductCard {...product} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default SearchPage;
