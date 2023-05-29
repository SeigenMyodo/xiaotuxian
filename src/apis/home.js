import httpInstance from '@/utils/http'

// 获得banner
export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner'
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findHotAPI = () => {
  return httpInstance({
    url: '/home/hot'
  })
}
/**
 * @description: 获取商品模块
 * @param {*}
 * @return {*}
 */
export const findGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}
