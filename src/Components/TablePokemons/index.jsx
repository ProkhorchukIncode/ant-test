import { Table } from "antd"
import { Typography } from "antd"
import Text from "antd/lib/typography/Text"
// import { Image } from "antd"

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <Typography>
                <Text copyable>
                    {text}
                </Text>
            </Typography>
            ,
        sorter: (a, b) => a.name.length - b.name.length,
        filters: [
            {
                text: 'char',
                value: 'char',
            },
            {
                text: 'ra',
                value: 'ra',
            },
            {
                text: 'saur',
                value: 'saur',
            },
        ],
        onFilter: (value, item) => item.name.includes(value)
    },
    {
        title: 'Link',
        dataIndex: 'url',
        key: 'url',
    },
]

const TablePokemons = ({pokemons, rows=10}) => {

    return (
        <Table
            dataSource={pokemons} 
            columns={columns}
            pagination={{
                pageSize: rows,
                position: ['topCenter'],
            }}
        />
    )
}
export default TablePokemons