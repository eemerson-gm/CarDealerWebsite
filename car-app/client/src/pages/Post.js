import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

class Post extends Component {

    state = {
        title: "",
        description: "",
        condition: "",
        make: "",
        model: "",
        year: "",
        colour: "",
        options: "",
        kilometres: "",
        price: "",
        contact: "",
        notes: "",
        response: ""
    }

    handleCreatePost = async e => {
        e.preventDefault();

        const response = await fetch('/api/cars/listing/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                condition: this.state.condition,
                make: this.state.make,
                model: this.state.model,
                year: this.state.year,
                colour: this.state.colour,
                options: this.state.options,
                kilometres: this.state.kilometres,
                price: this.state.price,
                contact: this.state.contact,
                notes: this.state.notes,
                listingOwner: localStorage.getItem('username'),
                response: ""
            }),
        });
        const body = await response.text();
        this.setState({ reponse: body });

        if (!body.includes("\"errors\"")) {
            this.props.history.push('/')
        }

    }


    render() {
        return (
            <div className="flex-div">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className="flex-div">
                                    <br></br><br></br>
                                    <h1>
                                        Posting Page
                                    </h1>
                                </div>
                            </td>
                        </tr>
                        <hr></hr><br></br>
                        <tr>
                            <td>
                                <div className="basic-div">
                                    <form onSubmit={this.handleCreatePost}>
                                        <table>
                                            <tr>
                                                <td>
                                                    <input id="imageInput" type="image" />
                                                </td>
                                                <td>
                                                    <tr>
                                                        <td>
                                                            <input id="titleInput" type="text" placeholder="Title..." onChange={e => this.setState({ title: e.target.value })} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input id="descriptionInput" type="text" placeholder="Description..." onChange={e => this.setState({ description: e.target.value })} />
                                                        </td>
                                                    </tr>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2>Price: </h2>
                                                </td>
                                                <td>
                                                    <input id="priceInput" type="number" placeholder="(ex. 5000)" min="0" onChange={e => this.setState({ price: e.target.value })} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2>Condition: </h2>
                                                </td>
                                                <td>
                                                    <input id="conditionInput" list="listCondition" placeholder="Select" onChange={e => this.setState({ condition: e.target.value })} />
                                                    <datalist id="listCondition">
                                                        <option value="New" />
                                                        <option value="Used - Great" />
                                                        <option value="Used - Good" />
                                                        <option value="Used - Bad" />
                                                    </datalist>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2>Make: </h2>
                                                </td>
                                                <td>
                                                    <input id="makeInput" type="text" placeholder="(ex. Honda, Toyota)" onChange={e => this.setState({ make: e.target.value })} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2>Model: </h2>
                                                </td>
                                                <td>
                                                    <input id="modelInput" type="text" placeholder="(ex. Accord, Corolla)" onChange={e => this.setState({ model: e.target.value })} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2>Year: </h2>
                                                </td>
                                                <td>
                                                    <input id="yearInput" type="number" placeholder="(ex. 1997)" min="0" onChange={e => this.setState({ year: e.target.value })} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2>Kilometres: </h2>
                                                </td>
                                                <td>
                                                    <input id="kilometreInput" type="number" placeholder="(ex. 5000)" min="0" onChange={e => this.setState({ kilometres: e.target.value })} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2>Colour: </h2>
                                                </td>
                                                <td>
                                                    <input id="colourInput" list="listColour" placeholder="Select" onChange={e => this.setState({ colour: e.target.value })} />
                                                    <datalist id="listColour">
                                                        <option value="White" />
                                                        <option value="Black" />
                                                        <option value="Grey" />
                                                        <option value="Silver" />
                                                        <option value="Blue" />
                                                        <option value="Red" />
                                                        <option value="Green" />
                                                        <option value="Beige" />
                                                    </datalist>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2>Options: </h2>
                                                </td>
                                                <td>
                                                    <input id="optionInput" type="text" placeholder="(ex. Sunroof, AC)" onChange={e => this.setState({ options: e.target.value })} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2>Contact: </h2>
                                                </td>
                                                <td>
                                                    <input id="contactInput" type="text" placeholder="(ex. email, phonenumber)" onChange={e => this.setState({ contact: e.target.value })} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2>Notes:</h2>
                                                </td>
                                                <td>

                                                </td>
                                            </tr>
                                            <tr>
                                                <input id="notesInput" type="text" placeholder="Extra notes..." onChange={e => this.setState({ notes: e.target.value })} />
                                            </tr>
                                            <tr>
                                                <input id="buttonSubmit" type="submit" value="Post"></input>
                                            </tr>
                                        </table>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        );
    }
}

export default Post;
