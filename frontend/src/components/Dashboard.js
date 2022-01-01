import React from "react";
import { Card, CardGroup } from 'react-bootstrap';

class Dashboard extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/dashboard")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Carregando </h1> </div>;

    return (

      <>
        <CardGroup>
          {items.map((item) => (
            <li key={item.id}>
              <Card style={{ width: '25rem', padding: '20px', margin: '10px' }}>
                <Card.Img variant="top" src="https://previews.123rf.com/images/chrisdorney/chrisdorney1306/chrisdorney130600109/20371194-example-rubber-stamp-over-a-white-background-.jpg" />
                <Card.Body >
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Total de Aulas: {item.qtd_classes}</Card.Subtitle>
                  {item.classes.map((lesson) => (
                    <ol key={lesson.id}>
                      <Card.Text >
                        {lesson.name} - Data : {lesson.date}
                      </Card.Text>
                    </ol>
                  ))}
                </Card.Body>
              </Card>
            </li>

          ))}
        </CardGroup>

      </>


    );
  }
}

export default Dashboard;
