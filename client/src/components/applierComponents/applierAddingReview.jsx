import { Container } from "react-bootstrap";
import "../../assets/css/feedback.css";
import ApplierButton from "./applierButton";
import ApplierInputForm from "./applierInputForm";

const ApplierAddingReview = (props) => {
  const { store, createReview, userProfile } = props;

  return (
    <form onSubmit={createReview}>
      <Container className=" mt-4 p-5 bg-white">
        <h1>Add Review</h1>
        <p>Rate</p>
        <div className="rate">
          <input
            type="radio"
            id="star5"
            name="rate"
            value="5"
            onChange={store.handleChange}
          />

          <label htmlFor="star5" title="text">
            5 stars
          </label>
          <input
            type="radio"
            id="star4"
            name="rate"
            value="4"
            onChange={store.handleChange}
          />
          <label htmlFor="star4" title="text">
            4 stars
          </label>
          <input
            type="radio"
            id="star3"
            name="rate"
            value="3"
            onChange={store.handleChange}
          />
          <label htmlFor="star3" title="text">
            3 stars
          </label>
          <input
            type="radio"
            id="star2"
            name="rate"
            value="2"
            onChange={store.handleChange}
          />
          <label htmlFor="star2" title="text">
            2 stars
          </label>
          <input
            type="radio"
            id="star1"
            name="rate"
            value="1"
            onChange={store.handleChange}
          />
          <label htmlFor="star1" title="text">
            1 star
          </label>
        </div>
        <textarea
          className="inputStyling description"
          type="text"
          placeholder="Type your experiment (interview or job as trainee) here [max 500 character]"
          maxLength="500"
          name="description"
          value={store.values.description}
          onChange={store.handleChange}
        />

        <input
          type="hidden"
          name="company"
          className="inputStyling"
          onChange={store.handleChange}
          value={(store.values.company = userProfile._id)}
        />

        <ApplierButton buttonType="Add review" type="submit" />
      </Container>
    </form>
  );
};

export default ApplierAddingReview;
