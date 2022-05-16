import React, { useEffect, useState } from 'react'
import { Button, Card, Container, FormControl, InputGroup, Col, Row} from 'react-bootstrap'

const response = {
    "searchType": "Movie",
    "expression": "inception 2010",
    "results": [
        {
            "id": "tt1375666",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg",
            "title": "Inception",
            "description": "(2010)"
        },
        {
            "id": "tt1790736",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_Ratio0.6800_AL_.jpg",
            "title": "Inception: Motion Comics",
            "description": "(2010 Video)"
        },
        {
            "id": "tt5295990",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_Ratio0.6800_AL_.jpg",
            "title": "Inception: Jump Right Into the Action",
            "description": "(2010 Video)"
        },
        {
            "id": "tt1686778",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "title": "Inception: 4Movie Premiere Special",
            "description": "(2010 TV Movie)"
        },
        {
            "id": "tt12960252",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/nopicture.jpg",
            "title": "Inception Premiere",
            "description": "(2010)"
        },
        {
            "id": "tt1375666",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg",
            "title": "Inception",
            "description": "(2010)"
        },
        {
            "id": "tt1790736",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_Ratio0.6800_AL_.jpg",
            "title": "Inception: Motion Comics",
            "description": "(2010 Video)"
        },
        {
            "id": "tt5295990",
            "resultType": "Title",
            "image": "https://imdb-api.com/images/original/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_Ratio0.6800_AL_.jpg",
            "title": "Inception: Jump Right Into the Action",
            "description": "(2010 Video)"
        },
    ],
    "errorMessage": ""
}

function SearchBar() {
  return (
    <InputGroup className="mb-3">
        <FormControl
        placeholder="Busca peliculas, series, productoras"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        />
        <Button variant="primary" id="button-addon2">
            Buscar
        </Button>
    </InputGroup>
  )
}


export default function SearchPage() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const filteredResponse = response.results.filter((result) => !result.image.includes("https://imdb-api.com/images/original/nopicture.jpg"))
        setMovieList(filteredResponse)
    },[])

  return (
    <Container>
        <SearchBar />
        <Row>
            {
                movieList.map((movie) => (
                    <Col sm={6} md={4} lg={3}>
                    {/* <Col xs={6} sm={4} md={3} lg={2}> */}
                        <Card bg={"dark"} key={movie.id} className="mb-3">
                            <Card.Img variant="top" src={movie.image} />
                            <Card.Body>
                                <Card.Title>{`${movie.title}`}</Card.Title>
                                <Card.Subtitle className="mt-2 text-muted">{`${movie.description}`}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>

    </Container>
  )
}