function myInstanceof(left, right) {
    //基本类型直接返回false
	if (typeof left !== 'Object' || left === null) return false
	//使用getPrototypeOf获取参数的原型对象
    let proto = Object.getPrototypeOf(left)

	while (true) {
        //查找到尽头，还没有找到
		if (proto == null) return false
        //找到相同的原型对象
		if (proto == right.prototype) return true
		proto = Object.getPrototypeOf(proto)
	}
}

console.log(myInstanceof('111', String)) //false
console.log(myInstanceof(new String('111'), String)) //true
