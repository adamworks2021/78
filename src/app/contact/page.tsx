'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { contactInfo } from "@/lib/data"
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  QrCode,
  Sparkles,
  Heart,
  Star,
  CheckCircle
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    type: 'inquiry',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // 重置表单
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', contact: '', type: 'inquiry', message: '' })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-20">
      {/* 页面头部 */}
      <Section background="gradient" padding="large">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MessageCircle className="h-8 w-8 text-brand-primary" />
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                联系我们
              </h1>
              <MessageCircle className="h-8 w-8 text-brand-primary" />
            </div>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              有任何问题或想要了解更多？我们随时为您提供专业的咨询服务，
              让我们一起开启您的魔法香水之旅。
            </p>
          </motion.div>
        </div>
      </Section>

      {/* 联系方式 */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 微信二维码 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-xl border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
                  <QrCode className="h-6 w-6 text-brand-primary" />
                  <span>微信咨询</span>
                </CardTitle>
                <p className="text-gray-600">扫描二维码，添加创始人Adam微信</p>
              </CardHeader>
              <CardContent className="text-center">
                {/* 二维码占位 */}
                <div className="w-64 h-64 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6">
                  <div className="text-center text-gray-400">
                    <QrCode className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-sm">微信二维码</p>
                    <p className="text-xs">扫描添加好友</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Badge variant="zodiac" className="text-lg px-4 py-2">
                    微信号：{contactInfo.wechat.id}
                  </Badge>
                  <p className="text-sm text-gray-600">
                    添加时请备注"78°咨询"，我们会尽快回复您
                  </p>
                </div>
                
                {/* 微信优势 */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { icon: "⚡", text: "快速响应" },
                    { icon: "🎯", text: "专业解答" },
                    { icon: "🎁", text: "专属优惠" },
                    { icon: "🤝", text: "一对一服务" }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <div className="text-sm font-semibold text-gray-700">{item.text}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 其他联系方式 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">其他联系方式</h2>
            
            {/* 联系信息卡片 */}
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  title: "电话咨询",
                  content: contactInfo.phone || "+86 138 0000 0000",
                  description: "工作时间：9:00-18:00",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: Mail,
                  title: "邮箱联系",
                  content: contactInfo.email || "contact@78perfume.com",
                  description: "24小时内回复",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: MapPin,
                  title: "公司地址",
                  content: contactInfo.address || "中国·上海",
                  description: "欢迎预约到访",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: Clock,
                  title: "服务时间",
                  content: "周一至周日 9:00-21:00",
                  description: "节假日正常服务",
                  color: "from-orange-500 to-red-500"
                }
              ].map((contact, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center flex-shrink-0`}>
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {contact.title}
                        </h3>
                        <p className="text-brand-primary font-semibold mb-1">
                          {contact.content}
                        </p>
                        <p className="text-sm text-gray-600">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 快速咨询按钮 */}
            <div className="mt-8">
              <Button size="lg" variant="gradient" className="w-full">
                <MessageCircle className="h-5 w-5 mr-2" />
                立即微信咨询
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 在线留言 */}
      <Section background="muted">
        <SectionHeader
          subtitle="在线留言"
          title="留下您的信息"
          description="填写下方表单，我们会尽快与您取得联系"
        />
        
        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardContent className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 姓名 */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="请输入您的姓名"
                    />
                  </div>

                  {/* 联系方式 */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      联系方式 *
                    </label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="请输入手机号或微信号"
                    />
                  </div>

                  {/* 咨询类型 */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      咨询类型
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    >
                      <option value="inquiry">产品咨询</option>
                      <option value="agent">代理加盟</option>
                      <option value="complaint">投诉建议</option>
                      <option value="suggestion">其他咨询</option>
                    </select>
                  </div>

                  {/* 留言内容 */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      留言内容 *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
                      placeholder="请详细描述您的问题或需求..."
                    />
                  </div>

                  {/* 提交按钮 */}
                  <Button
                    type="submit"
                    size="lg"
                    variant="gradient"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        提交中...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        提交留言
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    提交成功！
                  </h3>
                  <p className="text-gray-600 mb-6">
                    感谢您的留言，我们会在24小时内与您联系。
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-brand-primary">
                    <Heart className="h-5 w-5" />
                    <span className="font-semibold">78°魔法香水团队</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 服务承诺 */}
      <Section>
        <SectionHeader
          subtitle="服务承诺"
          title="我们的服务保障"
          description="专业、贴心、高效的服务，让您的咨询体验更加愉快"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "⚡",
              title: "快速响应",
              description: "微信咨询即时回复，其他方式24小时内响应",
              color: "from-yellow-500 to-orange-500"
            },
            {
              icon: "🎯",
              title: "专业解答",
              description: "专业团队提供准确、详细的产品和代理咨询",
              color: "from-blue-500 to-purple-500"
            },
            {
              icon: "🤝",
              title: "贴心服务",
              description: "一对一专属服务，全程跟踪，直到问题解决",
              color: "from-green-500 to-teal-500"
            }
          ].map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${promise.color} flex items-center justify-center mx-auto mb-6 text-2xl`}>
                {promise.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {promise.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 底部CTA */}
      <Section background="mystical" className="text-white">
        <div className="text-center">
          <Sparkles className="h-12 w-12 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-3xl font-bold mb-4">
            开启您的魔法香水之旅
          </h2>
          <p className="text-xl mb-8 opacity-90">
            让78°为您带来生活的美好改变
          </p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            <MessageCircle className="h-5 w-5 mr-2" />
            立即联系我们
          </Button>
        </div>
      </Section>
    </div>
  )
}
