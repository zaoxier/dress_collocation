<?php
// +----------------------------------------------------------------------
// | Description: 基础框架路由配置文件
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honghaiweb.com>
// +----------------------------------------------------------------------

return [
    // 定义资源路由
    '__rest__'=>[
        'user/rules'		   =>'user/rules',
        'user/groups'		   =>'user/groups',
        'user/users'		   =>'user/users',
        'user/menus'		   =>'user/menus',
        'user/structures'	   =>'user/structures',
        'user/posts'          =>'user/posts',
    ],
	// 【获取信息】
	'user/infos/index' =>['user/infos/index',['method' => 'POST']],
	// 刷新token
	'user/infos/refresh' =>['user/infos/refresh',['method' => 'POST']],
	// 【基础】登录
	'user/base/login' => ['user/base/login', ['method' => 'POST|GET']],
	// 【基础】记住登录
	'user/base/relogin'	=> ['user/base/relogin', ['method' => 'POST']],
	// 【基础】修改密码
	'user/base/setInfo' => ['user/base/setInfo', ['method' => 'POST']],
	// 【基础】退出登录
	'user/base/logout' => ['user/base/logout', ['method' => 'POST']],
	// 【基础】获取配置
	'user/base/getConfigs' => ['user/base/getConfigs', ['method' => 'POST']],
	// 【基础】获取验证码
	'user/base/getVerify' => ['user/base/getVerify', ['method' => 'GET']],
	// 【基础】上传图片
	'user/upload' => ['user/upload/index', ['method' => 'POST']],
	// 保存系统配置
	'user/systemConfigs' => ['user/systemConfigs/save', ['method' => 'POST']],
	// 【规则】批量删除
	'user/rules/deletes' => ['user/rules/deletes', ['method' => 'POST']],
	// 【规则】批量启用/禁用
	'user/rules/enables' => ['user/rules/enables', ['method' => 'POST']],
	// 【用户组】批量删除
	'user/groups/deletes' => ['user/groups/deletes', ['method' => 'POST']],
	// 【用户组】批量启用/禁用
	'user/groups/enables' => ['user/groups/enables', ['method' => 'POST']],
	// 【用户】批量删除
	'user/users/deletes' => ['user/users/deletes', ['method' => 'POST']],
	// 【用户】批量启用/禁用
	'user/users/enables' => ['user/users/enables', ['method' => 'POST']],
	// 【菜单】批量删除
	'user/menus/deletes' => ['user/menus/deletes', ['method' => 'POST']],
	// 【菜单】批量启用/禁用
	'user/menus/enables' => ['user/menus/enables', ['method' => 'POST']],
	// 【组织架构】批量删除
	'user/structures/deletes' => ['user/structures/deletes', ['method' => 'POST']],
	// 【组织架构】批量启用/禁用
	'user/structures/enables' => ['user/structures/enables', ['method' => 'POST']],
	// 【部门】批量删除
	'user/posts/deletes' => ['user/posts/deletes', ['method' => 'POST']],
	// 【部门】批量启用/禁用
	'user/posts/enables' => ['user/posts/enables', ['method' => 'POST']],
	
	// MISS路由
	'__miss__'  => 'user/base/miss',
];