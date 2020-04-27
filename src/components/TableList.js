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
                    <td>Example 1</td>
                    <td>https://www.example-1.com</td>
                    <td>https://link.example-1.com/Rdfiux67dbcs</td>
                    <td>
                        <ButtonGroup>
                            <Button color="primary" size="sm">Éditer</Button>
                            <Button color="danger" size="sm">Supprimer</Button>
                        </ButtonGroup>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}
