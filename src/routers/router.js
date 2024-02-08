import {
  UploadOutlined,
  VideoCameraOutlined,
  NodeIndexOutlined,
} from "@ant-design/icons"
import About from "../pages/About"
import AAA from "../pages/AAA"

const homeItem = [
  {
    key: "1",
    icon: <NodeIndexOutlined />,
    label: "关于",
    children: [
      {
        key: "/about",
        path: "/about",
        icon: <VideoCameraOutlined />,
        label: "详细信息",
        element: <About />,
      },
    ],
  },
  {
    key: "/a",
    path: "/a",
    icon: <VideoCameraOutlined />,
    label: "nav 2",
    element: <AAA />,
  },
  {
    //计算机视觉、建模npg 电子医疗、nature medicine
    key: "4",
    icon: <UploadOutlined />,
    label: "nav 3",
    element: <About />,
  },
]
export default homeItem
