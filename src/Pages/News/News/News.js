import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaAngleDoubleRight, FaArrowCircleRight, FaStar } from 'react-icons/fa';
import useTitle from '../../../hooks/useTitle';

const News = () => {
    const news = useLoaderData();
    const { category_id, title, author, details, image_url, rating, total_view } = news;

    useTitle('News Detail');
    return (
        <Card className=''>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title className='text-center'>{title}</Card.Title>
                <div className='d-flex justify-content-around align-items-center'>
                    <div>
                        <span className='fw-semibold'>Author:</span> {author?.name}
                    </div>
                    <div>
                        <span className='fw-semibold'>Published Date:</span> {author?.published_date}
                    </div>
                    <div className='p-2'>
                        <FaStar className='text-warning me-1'></FaStar>
                        <span>{rating?.number}</span>
                    </div>
                </div>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button className='px-5 py-2 fs-5 mt-4' variant="danger">Related News
                        <FaAngleDoubleRight className='ms-2'></FaAngleDoubleRight>
                    </Button>

                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;