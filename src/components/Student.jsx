import { useQuery, gql } from "@apollo/client";

const STUDENT_DATA = gql`
  query {
    students {
      id
      name
      email
      age
    }
  }
`;

const Student = () => {
  const { loading, error, data } = useQuery(STUDENT_DATA);

  if (error) {
    return <h1>Ops! 404 Error Found</h1>;
  }
  if (loading) {
    return <h1>Loading ......</h1>;
  }
  const { students } = data;
  return (
    <div>
      <h1>Students Data</h1>
      {students.map((v) => (
        <div key={v.id}>
          <span style={{ marginRight: 10 }}>{v.id}</span>
          <span style={{ marginRight: 10 }}>{v.name}</span>
          <span style={{ marginRight: 10 }}>{v.age}</span>
          <span style={{ marginRight: 10 }}>{v.email}</span>
        </div>
      ))}
    </div>
  );
};
export default Student;
