'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addStuff } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddStuffSchema } from '@/lib/validationSchemas';

const onSubmit = async (data: {
  name: string; age: number; breed: string; story: string; photo: string; owner: string; }) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await addStuff(data);
  swal('Success', 'Your item has been added', 'success', {
    timer: 2000,
  });
};

const AddStuffForm: React.FC = () => {
  const { data: session, status } = useSession();
  // console.log('AddStuffForm', status, session);
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddStuffSchema),
  });
  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Stories & Photos</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <input
                    type="text"
                    {...register('name')}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.name?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Age</Form.Label>
                  <input
                    type="number"
                    {...register('age')}
                    className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.age?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Breed</Form.Label>
                  <input
                    type="text"
                    {...register('breed')}
                    className={`form-control ${errors.breed ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.breed?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Story</Form.Label>
                  <textarea
                    {...register('story')}
                    className={`form-control ${errors.story ? 'is-invalid' : ''}`}
                    placeholder="Tell us the story about your guinea pig"
                    rows={4}
                  />
                  <div className="invalid-feedback">{errors.story?.message}</div>
                </Form.Group>
                <Form.Label>Photo</Form.Label>
                <input
                  type="text"
                  {...register('photo')}
                  className={`form-control ${errors.photo ? 'is-invalid' : ''}`}
                  placeholder="Enter the image URL"
                />
                <div className="invalid-feedback">{errors.photo?.message}</div>

                <input type="hidden" {...register('owner')} value={currentUser} />
                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddStuffForm;
