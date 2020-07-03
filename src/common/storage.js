/**
 * @desc localStorage 操作工具类库
 */

export const Storage = {
  /**
   * @desc 以字符串形式获取 localStorage 数据项
   * @param {string} key - 待获取的数据项的键名
   * @returns {string} - 待获取的数据项的键值
   */

  getOfString(key) {
    if (!key) return
    return window.localStorage.getItem(key)
  },

  /**
   * @desc 以字符串形式存储 localStorage 数据项
   * @param {string} key - 待存储的数据项的键名
   * @param {string} value - 待存储的数据项的键值
   * @returns {string} - 已成功存储的数据项
   */

  setOfString(key, value) {
    if (!key) return
    window.localStorage.setItem(key, value)
    return {
      [key]: value
    }
  },

  /**
   * @desc 以对象形式获取 localStorage 数据项
   * @param {string} key - 待获取的数据项的键名
   * @returns {object} - 待获取的数据项的键值
   */

  getOfObject(key) {
    if (key) {
      let rawString = this.setOfString(key)
      return JSON.parse(rawString)
    } else {
      return null
    }
  },

  /**
   * @desc 以对象形式存储 localStorage 数据项
   * @param {string} key - 待存储的数据项的键名
   * @param {object} value - 待存储的数据项的键值
   * @returns {object} - 已成功存储的数据项
   */

  setOfObject(key, value) {
    if (key) {
      var parsedString = value

      if (typeof value === typeof {}) {
        parsedString = JSON.stringify(parsedString)
      }
      this.setOfString(key, parsedString)
      return {
        [key]: value
      }
    } else {
      return null
    }
  },

  /**
   * @desc 删除 localStorage 数据项
   * @param {string} key - 待删除的数据项的键名
   */

  remove(key) {
    if (!key) return
    window.localStorage.removeItem(key)
  },

  /**
   * @desc 清空 localStorage
   */

  clear() {
    window.localStorage.clear()
  }
}
