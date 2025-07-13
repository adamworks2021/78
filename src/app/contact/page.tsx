import { contactInfo } from "@/lib/data"

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* 页面头部 */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              联系我们
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              有任何问题或想要了解更多？我们随时为您提供专业的咨询服务，
              让我们一起开启您的魔法香水之旅。
            </p>
          </div>
        </div>
      </section>

      {/* 微信联系方式 */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl border-0 overflow-hidden">
              <div className="text-center p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  微信咨询
                </h2>
                <p className="text-gray-600 text-lg mb-8">扫描二维码，添加创始人Adam微信</p>
                
                {/* 微信二维码 */}
                <div className="w-80 h-80 mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8">
                  <img 
                    src="/optimized/brand/wechat-qr-large.webp"
                    alt="78° 魔法香水官方微信二维码"
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>

                <div className="space-y-4 mb-8">
                  <div className="inline-flex items-center rounded-full border border-purple-600 bg-purple-100 text-purple-600 px-6 py-3 text-xl font-semibold">
                    微信号：{contactInfo.wechat.id}
                  </div>
                  <p className="text-gray-600">
                    添加时请备注&ldquo;78°咨询&rdquo;，我们会尽快回复您
                  </p>
                </div>

                {/* 微信优势 */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/70 rounded-xl">
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="font-semibold text-gray-800 mb-1">快速响应</div>
                    <div className="text-sm text-gray-600">即时回复</div>
                  </div>
                  <div className="text-center p-4 bg-white/70 rounded-xl">
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="font-semibold text-gray-800 mb-1">专业解答</div>
                    <div className="text-sm text-gray-600">权威指导</div>
                  </div>
                  <div className="text-center p-4 bg-white/70 rounded-xl">
                    <div className="text-3xl mb-2">🎁</div>
                    <div className="font-semibold text-gray-800 mb-1">专属优惠</div>
                    <div className="text-sm text-gray-600">限时福利</div>
                  </div>
                  <div className="text-center p-4 bg-white/70 rounded-xl">
                    <div className="text-3xl mb-2">🤝</div>
                    <div className="font-semibold text-gray-800 mb-1">一对一服务</div>
                    <div className="text-sm text-gray-600">贴心陪伴</div>
                  </div>
                </div>

                {/* 快速咨询按钮 */}
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg py-4 px-8 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  立即微信咨询
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务承诺 */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-4">
              服务承诺
            </h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              我们的服务保障
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              专业、贴心、高效的服务，让您的咨询体验更加愉快
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-6 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                快速响应
              </h3>
              <p className="text-gray-600 leading-relaxed">
                微信咨询即时回复，24小时内响应
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                专业解答
              </h3>
              <p className="text-gray-600 leading-relaxed">
                专业团队提供准确、详细的产品和代理咨询
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-6 text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                贴心服务
              </h3>
              <p className="text-gray-600 leading-relaxed">
                一对一专属服务，全程跟踪，直到问题解决
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部CTA */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              开启您的魔法香水之旅
            </h2>
            <p className="text-xl mb-8 opacity-90">
              让78°为您带来生活的美好改变
            </p>
            <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              立即联系我们
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
