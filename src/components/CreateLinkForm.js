import React, {useState} from "react";
import { Form, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

export default function CreateLinkForm({onChange, apiClient}) {
    const [client, setClient] = useState("");
    const [url, setUrl] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        console.info('Form submitted', {client, url})
    }

    return (
        <Form onSubmit={onSubmit}>
            <InputGroup>
                <Input
                    type="text"
                    placeholder="Client"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <InputGroupAddon addonType="append">
                    <Button color="success">Enregistrer</Button>
                </InputGroupAddon>
            </InputGroup>
        </Form>
    );
};
