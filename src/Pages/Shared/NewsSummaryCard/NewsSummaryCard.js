import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, details, image_url, rating, total_view } = news;
    // console.log(news);
    return (
        <Card className="my-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex '>
                    <Image src={author?.img}
                        roundedCircle
                        className='me-3'
                        style={{ height: '60px' }}>
                    </Image>
                    <div className='d-flex flex-column mt-2'>
                        <p className='mb-0'>{author?.name}</p>
                        <p className=''>{author?.published_date}</p>
                    </div>
                </div>
                <div className=''>
                    <FaRegBookmark className='pe-1'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length > 250 ?
                        <>{details?.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></>
                        :
                        <>{details}</>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <div className='p-2'>
                    <FaStar className='text-warning me-1'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-1'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;