import React from "react";
import {Button, Col, Form, FormGroup, FormInput, FormTextarea, ListGroup, ListGroupItem, Row} from "shards-react";

const SendMessage = () => (
    <ListGroup flush>
        <ListGroupItem className="p-3">
            <Row>
                <Col>
                    <Form>
                        <FormGroup>
                            <label htmlFor="feInputAddress">Number</label>
                            <FormInput id="feInputAddress" placeholder="(123) 456-7890"/>
                        </FormGroup>
                        <Row form>
                            {/* Message */}
                            <Col md="12" className="form-group">
                                <label htmlFor="feDescription">Message</label>
                                <FormTextarea id="feDescription" rows="5" />
                            </Col>
                        </Row>
                        <Button type="submit">Send</Button>
                    </Form>
                </Col>
            </Row>
        </ListGroupItem>
    </ListGroup>
);

export default SendMessage;
