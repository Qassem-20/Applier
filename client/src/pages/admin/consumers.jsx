import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment, useEffect } from "react";
import { Container, Row, Col , SortButton, SortIcon} from "react-bootstrap";
import ConsumerStore from "../../stores/ConsumerStore.js";


const Consumers = () => {
  const store = ConsumerStore();

  // const storeSearch = ConsumerStore((s) => s.searchConsumers())


  useEffect(() => {
    store.fetchConsumers();
  }, []);

  useEffect(() => {
    store.sortConsumer();
  }, []);


  const handleSearch = async (e) => {
    e.preventDefault();
    await store.searchConsumers();

  };


  return (
    <Fragment>
      <AdminNav />
      <Container className="mt-3 mb-2">
        <h1>Consumers</h1>
        <Row className=" pt-3 pb-1">
          <form onSubmit={handleSearch}>
            <Col xl={3} md={6} sm={12}>
              <input
                className="inputStyling"
                type="search"
                name="phone"
                value={store.values.phone}
                onChange={store.handleSearchForm}
                placeholder="Phone Number "
              />
            </Col>
            <Col xl={3} md={6} sm={12}>
              <input
                className="inputStyling"
                type="search"
                name="name"
                value={store.values.name}
                onChange={store.handleSearchForm}
                placeholder="Trainee Name"
              />
            </Col>
            <Col xl={3} md={6} sm={12}>
              <input
                className="inputStyling"
                type="date"
                name=""
                value=""
                placeholder="Joined Date"
              />
            </Col>

            <Col xl={3} md={6} sm={12}>            
            <button className="btn " type="submit">
              submit
            </button>
            </Col>

          </form>
          <Col xl={3} md={6} sm={12}>
            <svg onClick={store.sortConsumer} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-down-alt" viewBox="0 0 16 16">
              <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
            </svg>
          </Col>

          <Col xl={3} md={6} sm={12}>
            <select className="inputStyling" name="cars" placeholder="Status">
              <option value="saab">Null</option>
              <option value="volvo">Unsuspend</option>
              <option value="saab">Suspended</option>
            </select>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="opportunitiesTag">
          <Col xl={2}>
            <p className="opportunitiesMainTags">Name</p>
          </Col>
          <Col xl={3}>
            <p className="opportunitiesMainTags">Email</p>
          </Col>
          <Col xl={2}>
            <p className="opportunitiesMainTags">Phone Number</p>
          </Col>
          <Col xl={2}>
            <p className="opportunitiesMainTags">nationality</p>
          </Col>
          <Col xl={2}>
            <p className="opportunitiesMainTags">suspendBy</p>
          </Col>
          <Col xl={1}>
            <p className="opportunitiesMainTags">Status</p>
          </Col>
        </Row>
      </Container>
      {store.consumers &&
        store.consumers.map((consumer) => {
          return (
            <Container fluid>
              <Row className="opportunitiesT">
                <Col xl={2}>
                  <p className="opportunitiesTags">{consumer.name}</p>
                </Col>
                <Col xl={3}>
                  <p className="opportunitiesTags">{consumer.email}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">{consumer.phone_number}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">{consumer.nationality}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">consumer</p>
                </Col>
                <Col xl={1}>
                  <form onSubmit={store.updateConsumer}>
                    <select name="statue" defaultValue={consumer.statue}>
                      <option value="suspend">suspend</option>
                      <option value="unsuspend">unsuspend</option>
                    </select>
                  </form>
                </Col>
              </Row>
            </Container>
          );
        })}
    </Fragment>
  );
};

export default Consumers;
