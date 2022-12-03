import ListGroup from 'react-bootstrap/ListGroup';
import { ListItem } from './ListItem';


function List() {

  return (
    <ListGroup className='px-5'>
      <ListGroup.Item>
        <ListItem />
      </ListGroup.Item>
    </ListGroup>
  );
}

export default List;