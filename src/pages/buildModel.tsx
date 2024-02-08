import { Table,Button } from "antd";
import model_data from "../mock/model.js";
import type { TableProps } from "antd";
interface DataType {
    id:string,
    name:string,
    description:string,
    model_name:string,
    model_URL:string,
    data_id:string,
}
 const columns: TableProps<DataType>['columns'] = [
    {
        title: '模型名称',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: '模型描述',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: '模型名称',
        dataIndex: 'model_name',
        key: 'model_name',
    },
    {
        title: '模型URL',
        dataIndex: 'model_URL',
        key: 'model_URL',
    },
    {
        title: '数据ID',
        dataIndex: 'data_id',
        key: 'data_id',
    },
]
export default function BuildModel() {
   

    return (
        <div>
            <Button type='primary' className="mb-8">创建模型</Button>
            <Table columns={columns} dataSource={model_data} />
        </div>
    
    )
}