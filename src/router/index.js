import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '工作台', icon: 'dashboard' }
    }]
  },
  {
    path: '/link',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'CommonLink',
        component: () => import('@/views/link/index'),
        meta: { title: '常用链接', icon: 'link' }
      }
    ]
  },
  {
    path: '/rule',
    component: Layout,
    redirect: '/rule/file',
    name: 'Rule',
    meta: { title: '管理规定', icon: 'documentation' },
    children: [
      {
        path: 'file',
        name: 'RuleFile',
        component: () => import('@/views/rule/file'),
        meta: { title: '制度文件台账' }
      },
      {
        path: 'spec',
        name: 'OpSpec',
        component: () => import('@/views/rule/spec'),
        meta: { title: '操作规程' }
      },
      {
        path: 'plan',
        name: 'EmergencyPlan',
        component: () => import('@/views/rule/plan'),
        meta: { title: '应急预案' }
      }
    ]
  },
  {
    path: '/promote',
    component: Layout,
    redirect: '/promote/train',
    name: 'Promote',
    meta: { title: '安全促进', icon: 'chart' },
    children: [
      {
        path: 'train',
        name: 'SafetyTrain',
        component: () => import('@/views/promote/train'),
        meta: { title: '安全培训' }
      },
      {
        path: 'improve',
        name: 'Improve',
        component: () => import('@/views/promote/improve'),
        meta: { title: '隐患改善' }
      },
      {
        path: 'activity',
        name: 'Activity',
        component: () => import('@/views/promote/activity'),
        meta: { title: '安全活动' }
      }
    ]
  },
  {
    path: '/policy',
    component: Layout,
    redirect: '/policy/law',
    name: 'Policy',
    meta: { title: '政策要求', icon: 'excel' },
    children: [
      {
        path: 'law',
        name: 'Law',
        component: () => import('@/views/policy/law'),
        meta: { title: '法规标准' }
      },
      {
        path: 'upper',
        name: 'UpperFile',
        component: () => import('@/views/policy/upper'),
        meta: { title: '上级文件' }
      },
      {
        path: 'check',
        name: 'SelfCheck',
        component: () => import('@/views/policy/check'),
        meta: { title: '合规自查' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/user',
    name: 'System',
    meta: { title: '系统管理', icon: 'system' },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/system/user'),
        meta: { title: '用户管理' }
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/system/role'),
        meta: { title: '角色管理' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
