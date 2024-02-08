import { Space, Table,Button,Flex, Modal } from "antd";
import dataSet from "../mock/data.js";
import type { TableProps } from "antd";
import { useState } from "react";
interface DataType {
    id:string,
    name:string,
    amount:number,
    description:string,
    x_data_demision:number,
    y_data_demision:number
}
const columns: TableProps<DataType>['columns'] = [
    {
        title: '数据集名称',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: '数据集描述',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: '数据集大小',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: '数据集X维度',
        dataIndex: 'x_data_demision',
        key: 'x_data_demision',
    },
    {
        title: '数据集Y维度',
        dataIndex: 'y_data_demision',
        key: 'y_data_demision',
    },
    {
        title: '操作',
        key: 'action',
        render: (_,record) => (
            <Space size="small">
                <Button type="link" size="small">下载x数据集</Button>
                <Button type="link" size="small">下载y数据集</Button>
            </Space>
        )
    }
]
export default function DataSet() {
    const [dataSetCreateModalOpen,setDataSetCreateModalOpen] = useState(false)
    const openDataSetCreate = () => {
        setDataSetCreateModalOpen(true)
        console.log('openDataSetCreate')
    }
    const closeDataSetCreate = () => {
        setDataSetCreateModalOpen(false)
        console.log('closeDataSetCreate')
    }
    return (
        <>
        <Flex className="mb-8 ">
            <Button type="primary"  onClick={openDataSetCreate}>新增数据集</Button>
        </Flex>
        

        <Table columns={columns} dataSource={dataSet} />
        <DataSetCreateModal open={dataSetCreateModalOpen} closeModal={closeDataSetCreate}/>

        </>
    )
}
function DataSetCreateModal({open,closeModal} : {open:boolean,closeModal:()=>void}) {
    const submit = () => {
        console.log('submit')
        closeModal()
    }
    return(
        <>
            <Modal title="创建数据集" open={open} onCancel={closeModal} onOk={submit}>
                <div>创建数据集</div>
            </Modal>
        </>
    )
}