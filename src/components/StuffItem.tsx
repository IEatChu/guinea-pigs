import { Stuff } from '@prisma/client';
import Link from 'next/link';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const StuffItem = ({ name, age, breed, story, photo, id }: Stuff) => (
  <tr>
    <td>{name}</td>
    <td>{age}</td>
    <td>{breed}</td>
    <td>{story}</td>
    <td>{photo}</td>
    <td>
      <Link href={`/edit/${id}`}>Edit</Link>
    </td>
  </tr>
);

export default StuffItem;
