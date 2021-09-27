import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Card, Col, Carousel } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeCarousal from "../components/specific/HomeCarousal"
import AnnouncementTicker from "../components/specific/AnnouncementTicker"
import TendersList from "../components/specific/TendersList"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container fluid="xl" className="page-body">
      <Row className="row-deck row-cards">
        <Col lg="8">
          <Card>
            <Card.Body>
              <HomeCarousal />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <Card>
            <Card.Body>
              <Card.Title>Announcements</Card.Title>
              <AnnouncementTicker />
            </Card.Body>
          </Card>
        </Col>

        <Col md="6" lg="3">
          <Card>
            <Card.Body>
              <Card.Title>Mission</Card.Title>
              <p>
                Impart quality technical education and skills to develop
                engineering professionals to meet the needs of industry and
                society. Facilitate professional interactions between industry
                and engineers and to promote innovation and entrepreneurship
                Inculcate moral values and life ethics in engineering
                professionals to serve the society.{" "}
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card>
            <Card.Body>
              <Card.Title>Vision</Card.Title>
              <p>
                To be a centre of excellence to mould technically competent
                engineers for industry expertise and social development.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md="12" lg="6">
          <Card>
            <Card.Body>
              <Card.Title>About GPTC Perinthalmanna</Card.Title>
              <p>
                Government Polytechnic College Perinthalmanna is one of the
                leading institutions of its kind in Kerala. Academically and
                otherwise its position in the state is unchallenged. Activities
                focusing on the result enhancement and the overall development
                of the students to make them excel in their respective fields
                are remarkable. The college has a rich tradition to look back.
                The present is praiseworthy, so the future has to be envisioned
                in the light of the glorious past and the meritorious present
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md="12" lg="6">
          <Card>
            <Card.Body>
              <Card.Title>Tenders and Quotations</Card.Title>
              <TendersList />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
