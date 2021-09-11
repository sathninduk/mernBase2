import React from "react";
import {gql, useQuery} from "@apollo/client";

const TODOS = gql`
{
  todos {
    id
    text
    complete
  }
}
`;

function Todos() {
    const { loading, error, data } = useQuery(TODOS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.todos.map(({ id, text, complete }) => (
        <div key={id}>
            <p>
                {text}: {complete.toString()}
            </p>
        </div>
    ));
}

function indexComponent() {
    return (
        <div>
            Hello mernBase Route!
            <Todos />
        </div>
    )
}

export default indexComponent;