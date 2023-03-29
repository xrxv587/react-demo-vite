import { Menu, MenuProps, MenuRef } from "antd";
import { ReactNode, RefAttributes, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = {
	key: string,
	label: any,
	icon?: ReactNode,
	items?: MenuItem[],
	url?: string
}
const Navs: MenuItem[] = [
	{
		key: 'aaa', icon: null, label: '日常使用', items: [
			{ key: 'aaa-1', label: '我的待办1', url: 'todo' },
			{ key: 'aaa-2', label: '我的待办2' }
		]
	},
	{
		key: 'bbb', icon: null, label: '测试菜单', items: [
			{ key: 'bbb-1', label: '测试菜单1', url: 'test' },
			{ key: 'bbb-2', label: '测试菜单2' }
		]
	},
	{ key: 'ccc', icon: null, label: '一级菜单', url: 'first' }
]

const SideNav = (props: JSX.IntrinsicAttributes & MenuProps & RefAttributes<MenuRef>) => {
	const location = useLocation();
	const [openkeys, setopenkeys] = useState<string[]>([]);
	const [selectKeys, setSelectKeys] = useState<string[]>([]);
	const navigate = useNavigate();
	const currentUrl = location.pathname.split('/')[1];
	useEffect(() => {
		const path = findOpenKeys(currentUrl, Navs);
		setopenkeys([path[0]]);
		setSelectKeys([path[1]]);
	}, [location.pathname]);

	// 导航固定最多二级导航
	const findOpenKeys = (current: string, menus: MenuItem[]): string[] => {
		let path: string[] = [];
		for (let i = 0; i < menus.length; i++) {
			path.push(menus[i].key);
			if (!menus[i].items && menus[i].url === current) {
				path.push(menus[i].key);
				return path;
			} else {
				const found = menus[i].items?.find(item => item.url === current);
				if (found) {
					path.push(found.key);
					return path;
				} else {
					path = [];
					continue;
				}
			}
		}
		return path;
	}

	const handleOpenChange = (openValues: string[]) => {
		const openKey = openValues.length > 0 ? openValues[openValues.length - 1] : '';
		setopenkeys([openKey]);
	}

	// 递归查找目标
	const findTarget = (keys: Array<string>, arr: MenuItem[]): MenuItem => {
		const key = keys.pop();
		const target = arr.find(item => item.key === key) as MenuItem;
		if (target.items && keys.length !== 0) {
			return findTarget(keys, target.items);
		}
		return target;
	}

	// 导航栏跳转路由
	const handleSelect = (e: any) => {
		const { keyPath } = e;
		const target = findTarget(keyPath, Navs);
		navigate(target.url as string);
	}
	return (<Menu
		{...props}
		mode="inline"
		openKeys={openkeys}
		selectedKeys={selectKeys}
		onOpenChange={handleOpenChange}
		onSelect={handleSelect}>
		{
			Navs.map(item => {
				if (item.items) {
					return <Menu.SubMenu key={item.key} title={item.label}>
						{
							item.items.map(inner => <Menu.Item key={inner.key} data-path={inner.key}>{inner.label}</Menu.Item>)
						}
					</Menu.SubMenu>
				} else {
					return <Menu.Item key={item.key} data-path={item.key}>{item.label}</Menu.Item>
				}
			})
		}
	</Menu>)
}

export default SideNav;