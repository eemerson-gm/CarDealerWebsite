import React from 'react';

class Listings extends React.Component {
    fetchCars() {
        // Where we're fetching data from
        fetch(`/api/cars`)
          // We get the API response and receive data in JSON format...
          .then(response => response.json())
          // ...then we update the users state
          .then(data =>
            this.setState({
              users: data,
              isLoading: false,
            })
          )
          // Catch any errors we hit and update the app
          .catch(error => this.setState({ error, isLoading: false }));
      }

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            users: [],
            error: null
        };
    }

    componentDidMount() {
        this.fetchCars();
    }

    render() {
        const { isLoading, users, error } = this.state;
  return (
    <React.Fragment>
      <h1>Random User</h1>
      {error ? <p>{error.message}</p> : null}

      {!isLoading ? (
        users.map(user => {
          const { title, 
            description, 
            condition,
            make,
            model,
            year,
            colour,
            options,
            kilometres,
            price,
            contact,
            notes} = user;
          return (
            <div key={title}>
              <p>{description}</p>
              <p>Condition: {condition}</p>
              <p>Make: {make}</p>
              <p>Model: {model}</p>
              <p>Year: {year}</p>
              <p>Colour: {colour}</p>
              <p>Options: {options}</p>
              <p>KM: {kilometres}</p>
              <p>Notes: {notes}</p>
              <p>Price: {price}</p>
              <p>Contact: {contact}</p>
              <hr />
            </div>
          );
        })
      // If there is a delay in data, let's let the user know it's loading
      ) : (
        <h3>Loading...</h3>
      )}
    </React.Fragment>
  );
    }
}
export default Listings