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
              notes } = user;
            return (
              <div key={title}>
                <div className="basic-div">
                  <table className="list">
                    <tbody>
                      <tr>
                        <td>
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  <h1>{title}</h1>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  <h2>{description}</h2>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  <h2>Price: ${price}</h2>
                                </td>
                                <td>
                                  <h2>Condition: {condition}</h2>
                                </td>
                                <td>
                                  <h2>Make: {make}</h2>
                                </td>
                                <td>
                                  <h2>Model: {model}</h2>
                                </td>
                                <td>
                                  <h2>Year: {year}</h2>
                                </td>
                                <td>
                                  <h2>Colour: {colour}</h2>
                                </td>
                                <td>
                                  <h2>{kilometres}km</h2>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  <a href={"mailto:" + contact}>
                                    <h2>Contact: {contact}</h2>
                                  </a>
                                </td>
                                <td>
                                  <h2>Notes: {notes}</h2>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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