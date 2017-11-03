import React, { Component } from 'react';

class List extends Component{

    renderSearch(starData){
        console.log(starData);
        const name = starData.name;
        const gender = starData.gender;

        return(
            <tr key = {name}>
                <td> {name} </td>
                <td> {gender} </td>
            </tr>
        );
    }

    render(){
        console.log(this.props.list.results);
        return(
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Gender </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.list.length !== 0 
                        ? this.props.list.results.map(this.renderSearch) 
                        : null
                    }
                </tbody>
            </table>
        );
    }
}

export default List;