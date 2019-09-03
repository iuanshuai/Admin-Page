import React from "react";
import {Card, CardHeader, Col, Container, ListGroup, ListGroupItem, Row,} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import SendMessage from "../components/SendMessage";
import UploadFile from "../components/UploadFile";

const Upload = () => (
    <div>
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle
                    sm="4"
                    title="Upload"
                    subtitle=""
                    className="text-sm-left"
                />
            </Row>
            <Row>
                <Col lg="12" className="mb-4">
                    <Card small>
                        {/* Files & Dropdowns */}
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Upload File</h6>
                        </CardHeader>

                        <ListGroup flush>
                            <ListGroupItem className="px-3">
                                <strong className="text-muted d-block mb-2">
                                    Custom File Upload
                                </strong>
                                <UploadFile/>

                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
                <Col lg="12" className="mb-4">
                    {/* Complete Form Example */}
                    <Card small>
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Send Message</h6>
                        </CardHeader>
                        <SendMessage/>
                    </Card>
                </Col>

            </Row>
        </Container>
    </div>
);

export default Upload;
