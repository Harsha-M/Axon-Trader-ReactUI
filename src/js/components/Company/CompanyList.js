import React, { Component } from 'react';
import classes from './company.scss';

class CompanyList extends Component {
    render() {

        const { isFetching, error, items } = this.props.companies;

        if (error) {
            return <h1>Error loading page! {error.message}</h1>;
        }

        if (isFetching) {
            return <h1>Loading...</h1>;
        }

        return (
            <table className={classes.companyTable}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                        <th># Shares</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((company) => {
                            return (
                                <tr key={ company.id }>
                                    <td>{company.name}</td>
                                    <td>{company.value}</td>
                                    <td>{company.shares}</td>
                                    <td>details</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default CompanyList;