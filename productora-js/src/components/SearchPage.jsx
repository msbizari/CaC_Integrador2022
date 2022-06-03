import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Container, FormControl, InputGroup, Col, Row} from 'react-bootstrap'

const base_url = `https://imdb-api.com/en/API/SearchTitle/${import.meta.env.VITE_MOVIES_API_KEY}`
const response = {
    "searchType": "Movie",
    "expression": "inception 2010",
    "results": [
        {
            "id": "tt1745960",
            "rank": "1",
            "rankUpDown": "+4",
            "title": "Top Gun: Maverick",
            "fullTitle": "Top Gun: Maverick (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BMmIwZDMyYWUtNTU0ZS00ODJhLTg2ZmEtMTk5ZmYzODcxODYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Joseph Kosinski (dir.), Tom Cruise, Jennifer Connelly",
            "imDbRating": "8.7",
            "imDbRatingCount": "57756"
        },
        {
            "id": "tt0092099",
            "rank": "2",
            "rankUpDown": "+7",
            "title": "Top Gun",
            "fullTitle": "Top Gun (1986)",
            "year": "1986",
            "image": "https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Tony Scott (dir.), Tom Cruise, Tim Robbins",
            "imDbRating": "6.9",
            "imDbRatingCount": "347393"
        },
        {
            "id": "tt3513500",
            "rank": "3",
            "rankUpDown": "+8",
            "title": "Chip 'n Dale: Rescue Rangers",
            "fullTitle": "Chip 'n Dale: Rescue Rangers (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BZjBlMjIxN2ItNTMyNi00NDk5LWFhMzEtNzdiODE0Y2M4MWI2XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Akiva Schaffer (dir.), Andy Samberg, John Mulaney",
            "imDbRating": "7.1",
            "imDbRatingCount": "18570"
        },
        {
            "id": "tt10648342",
            "rank": "4",
            "rankUpDown": "+25",
            "title": "Thor: Love and Thunder",
            "fullTitle": "Thor: Love and Thunder (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Taika Waititi (dir.), Christian Bale, Taika Waititi",
            "imDbRating": "",
            "imDbRatingCount": "0"
        },
        {
            "id": "tt6710474",
            "rank": "5",
            "rankUpDown": "-1",
            "title": "Everything Everywhere All at Once",
            "fullTitle": "Everything Everywhere All at Once (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Dan Kwan (dir.), Michelle Yeoh, Stephanie Hsu",
            "imDbRating": "8.4",
            "imDbRatingCount": "86231"
        },
        {
            "id": "tt19623240",
            "rank": "6",
            "rankUpDown": "75,964",
            "title": "Winnie-The-Pooh: Blood and Honey",
            "fullTitle": "Winnie-The-Pooh: Blood and Honey ( 75,964)",
            "year": " 75,964",
            "image": "https://m.media-amazon.com/images/M/MV5BNWZiMDFiZTgtN2QzYS00YjViLWE2OGQtZWIxNzA4MjFmM2UzXkEyXkFqcGdeQXVyMjM4MTU4NjQ@._V1_UY176_CR92,0,128,176_AL_.jpg",
            "crew": "Rhys Frake-Waterfield (dir.), Natasha Tosini, Amber Doig-Thorne",
            "imDbRating": "",
            "imDbRatingCount": "0"
        },
        {
            "id": "tt9419884",
            "rank": "7",
            "rankUpDown": "-6",
            "title": "Doctor Strange in the Multiverse of Madness",
            "fullTitle": "Doctor Strange in the Multiverse of Madness (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Sam Raimi (dir.), Benedict Cumberbatch, Elizabeth Olsen",
            "imDbRating": "7.3",
            "imDbRatingCount": "184977"
        },
        {
            "id": "tt11138512",
            "rank": "8",
            "rankUpDown": "-5",
            "title": "The Northman",
            "fullTitle": "The Northman (2022)",
            "year": "2022",
            "image": "https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX128_CR0,3,128,176_AL_.jpg",
            "crew": "Robert Eggers (dir.), Alexander Skarsgård, Nicole Kidman",
            "imDbRating": "7.4",
            "imDbRatingCount": "102705"
        },
    ],
    "errorMessage": ""
}


export default function SearchPage() {
    const [movieList, setMovieList] = useState([]);
    const [searchText, setSearchText] = useState("")

    const filterResponse = (response) => {
        return response.results.filter((result) => !result.image.includes("https://imdb-api.com/images/original/nopicture.jpg"))
    }

    useEffect(() => {
        const filteredResponse = filterResponse(response)
        setMovieList(filteredResponse)
    },[])

    const handleSearch = () => {
        if (searchText.length > 0) {
            fetch(`${base_url}/${searchText}`)
            .then((response) => {
                console.log("response =>", response)
                return response.json()
            }).then((body) => {
                console.log("body =>", body)
                setMovieList(filterResponse(body))
            })
            .catch((error) => {
                console.log("fetching error",error)
            })
        }
    }

  return (
    <Container>
        <InputGroup className="mb-3 mt-5">
            <FormControl
            placeholder="Busca peliculas, series, productoras"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            key="input-search"
            value={searchText}
            onChange={(event) => {
                console.log(event.target.value)
                setSearchText(event.target.value)
            }}
            />
            <Button variant="primary" id="button-addon2" onClick={handleSearch}>
                Buscar
            </Button>
        </InputGroup>
        <Row>
            {
                movieList.map((movie) => (
                    <Col sm={6} md={4} lg={3} key={movie.id}>
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