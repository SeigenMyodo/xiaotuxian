import httpInstance from '@/utils/http'

// 获得banner
export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner'
  })
}
