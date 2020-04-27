import React from "react";
import { Table, ButtonGroup, Button } from 'reactstrap';

export default function TableList({onChange, apiClient}) {
    return (
        <Table borderless>
            <thead>
                <tr>
                    <th>Client</th>
                    <th>URL</th>
                    <th>ShortLink</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Example 1</th>
                    <th>https://www.example-1.com</th>
                    <th>https://link.example-1.com/Rdfiux67dbcs</th>
                    <th>
                        <ButtonGroup>
                            <Button color="primary" size="sm">Éditer</Button>
                            <Button color="danger" size="sm">Supprimer</Button>
                        </ButtonGroup>
                    </th>
                </tr>
                <tr>
                </tr>
            </tbody>
        </Table>
    );
}
