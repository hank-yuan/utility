function versionCompare(v1, v2) {
			var nIndex1, nIndex2, num1Str, num2Str, arr1, arr2, maxLength, count = 0; //定义变量
			nIndex1 = v1.search(/\d/); //找到第一个数字出现的位置编号
			nIndex2 = v2.search(/\d/);
			num1Str = v1.slice(nIndex1); //提取版本号的所有数字
			num2Str = v2.slice(nIndex2);
			arr1 = num1Str.split(/[._]/); //将数字字符串转化为字符串数组，用.或_进行分割
			arr2 = num2Str.split(/[._]/);
			for (var i = 0; i < arr1.length; i++) { //将字符串数组，转化为数字数组
				arr1[i] = parseInt(arr1[i]);
			}
			for (var i = 0; i < arr2.length; i++) { //将字符串数组，转化为数字数组
				arr2[i] = parseInt(arr2[i]);
			}
			maxLength = arr1.length >= arr2.length ? arr1.length : arr2.length; //获取较长的版本号
			if (arr1.length == arr2.length) { //如果两个版本号相等，函数终止执行，并且返回结果
				for (var i = 0; i < maxLength; i++) {
					if (arr1[i] == arr2[i]) {
						count++;
						if (count == maxLength && arr1[maxLength - 1] == arr2[maxLength - 1]) {
							return '版本号相同：' + v1
						}
					}
				}
			}
			for (var i = 0; i < maxLength; i++) {
				if (arr1[i] > arr2[i]) {
					return v1;
				} else if (arr1[i] == arr2[i]) {
					continue;
				} else if (arr1[i] === undefined) {
					return v2;
				} else if (arr2[i] === undefined) {
					return v1;
				} else {
					return v2;
				}
			}
		}
		console.log(versionCompare('v1.2.3', 'v1.2.2'));
		console.log(versionCompare('2.2.3', 'v1.2.2'));
		console.log(versionCompare('v1.2.3', '3.2.2'));
		console.log(versionCompare('v1_2_3', 'v2_2_2'));
		console.log(versionCompare('1.1.1', '1.1.1'));
