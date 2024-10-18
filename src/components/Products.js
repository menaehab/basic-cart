import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  function truncate(text, length) {
    if (text.length > length) return `${text.slice(0, length)}...`;
    else return text;
  }

  return (
    <div>
      <h1>Products Page</h1>
      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product.id}>
              <Card
                style={{
                  width: "18rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <Card.Img
                  style={{
                    width: "250px",
                    height: "250px",
                    objectFit: "cover",
                    margin: "0 auto"
                  }}
                  variant="top"
                  src={product.image}
                />
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <Card.Title>{truncate(product.title, 30)}</Card.Title>
                    <Card.Text>{truncate(product.description, 50)}</Card.Text>
                  </div>
                  <Button variant="primary" style={{ alignSelf: "center" }}>
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
