---
level: "undergrad"
course: "面向对象程序设计（OOP）"
title: "第三次作业"
deadline: "2026-11-13 23:59:00"
submit_link: "https://pan.hunnu.edu.cn/u/d/7c1ef522db5d420b986a/"
---

## Exercise Requirements
#### 提交格式：

```
学号_姓名_第7次随堂练习/
  |- C++代码
    |- GeographicEntity.h
    |- GeographicEntity.cpp
    |- ...
  |- Java代码
    |- GeographicEntity.java
    |- Point.java
    |- ...

例：2025xxxx_张三_第7次随堂练习/
  |- C++代码
    |- GeographicEntity.h
    |- GeographicEntity.cpp
    |- ...
  |- Java代码
    |- GeographicEntity.java
    |- Point.java
    |- ...
```

---

### 课后作业一、C++实现简易地理实体系统

#### 第一阶段任务

##### GeographicEntity类

设计基类GeographicEntity，需要实现一个地理实体的基类，包含以下要素：

* 属性（数据）
	* ID, name, createdTime,type,  latitude, longitude, description, attributes
* 函数（操作）
	* 构造与析构
	* addAttribute(), displayInfo(), calculateArea(), getEntityType(), render()
* 当ID为空时输出“无效参数”

**要求**

* 绘制UML图
* 使用访问控制符（private/protected/public）区分数据隐私性
* 将核心不变数据设为私有，中间数据设为受保护
* 正确使用基类指针/引用处理派生类对象
* 构造函数需要初始化所有私有成员和受保护成员
* 析构函数需要执行清理操作，并输出析构信息（便于追踪对象生命周期）
* 需要考虑异常情况（如ID为空的处理）

##### Point类

设计派生类Point，Point作为一种GeographicEntity，包含以下要素：

* 属性（数据）
	* ID, name, createdTime,type,  latitude, longitude, elevation, description, attributes
* 函数（操作）
	* 构造与析构
	* addAttribute(), displayInfo(), calculateArea(), getEntityType(), render(), getElevation()
* 当ID为空时输出“无效参数”

**要求**

* 绘制UML图
* elevation属于 Point 自己的内部状态
* Point 构造函数必须在初始化列表中调用 GeographicEntity 的构造函数。
* getElevation 提供只读访问
* Point 的面积返回0，类型返回 Point
* render() 输出Point的坐标与高程。

##### 测试代码

```c++
#include <iostream>
#include "Point.h"

int main() {
    Point point("P001", "教学楼入口", 10.0, 20.0, 45.5);
    point.addAttribute("类型=控制点");
    point.displayInfo();
    point.render();
    std::cout << p.calculateArea() << std::endl;
    std::cout << p.getElevation() << std::endl;
}
```

#### 第二阶段任务

##### LineString类

设计派生类LineString，作为一种GeographicEntity，包含以下要素：

* 属性（数据）
	* ID, points, totalLength, lengthDirty
* 函数（操作）
	* 构造与析构
	* addPoint(), calculateLength (), getLength(), getPointCount (), 
* 当ID为空时输出“无效参数”

**要求**

* 绘制UML图
* 相邻两点之间计算欧式距离
* 点数少于2时， LineString的长度为0
* getElevation 提供只读访问
* render() 输出节点数和线长度。

##### Polygon类

设计派生类Polygon，作为一种GeographicEntity，包含以下要素：

* 属性（数据）
	* ID, vertices, area, perimeter, dirty
* 函数（操作）
	* 构造与析构
	* addVertex(), calculateArea (), getPerimeter(), 
* 当ID为空时输出“无效参数”

**要求**

* 绘制UML图
* 相邻两点之间计算欧式距离
* Polygon要维护面积和周长
* 面积使用鞋带公式计算
* 周长也是遍历所有相邻边并累加距离

##### 测试要求

* 创建 vector<GeographicEntity*>
* 放入 Point、LineString 和 Polygon。
* 遍历时只通过基类指针调用 displayInfo、render、getEntityType 和 calculateArea。
* 折线：(0,0)、(3,4)、(6,8)，预期长度10。
* 三角形：(0,0)、(4,0)、(0,3)，预期面积6、周长12。
* 空ID：应抛出异常。
* 外部访问私有容器：应产生编译错误。
* 添加新点后再次读取结果：应重新计算。

### 课后作业二、Java实现简易地理实体系统

#### 第一阶段任务

##### GeographicEntity类

设计基类GeographicEntity，需要实现一个地理实体的基类，包含以下要素：

* 属性（数据）
	* ID, name, createdTime,type,  latitude, longitude, description, attributes
* 函数（操作）
	* 构造
	* addAttribute(), displayInfo(), calculateArea(), getEntityType(), render()
* 当ID为空时输出“无效参数”

**要求**

* 绘制UML图
* 使用访问控制符（private/protected/public）区分数据隐私性
* 将核心不变数据设为私有，中间数据设为受保护
* 正确使用基类指针/引用处理派生类对象
* 构造函数需要初始化所有私有成员和受保护成员
* 析构函数需要执行清理操作，并输出析构信息（便于追踪对象生命周期）
* 需要考虑异常情况（如ID为空的处理）

##### Point类

设计派生类Point，Point作为一种GeographicEntity，包含以下要素：

* 属性（数据）
	* ID, name, createdTime,type,  latitude, longitude, elevation, description, attributes
* 函数（操作）
	* 构造
	* addAttribute(), displayInfo(), calculateArea(), getEntityType(), render(), getElevation()
* 当ID为空时输出“无效参数”

**要求**

* 绘制UML图
* elevation属于 Point 自己的内部状态
* Point 构造函数必须在初始化列表中调用 GeographicEntity 的构造函数。
* getElevation 提供只读访问
* Point 的面积返回0，类型返回 Point
* render() 输出Point的坐标与高程。

##### 测试代码

```java
public class Tester {
	public static void main(String[] args) {
		Point point = new Point("P001", "教学楼入口", 10.0, 20.0, 45.5);
    	point.addAttribute("类型=控制点");
    	point.displayInfo();
	    point.render();
    	std::cout << p.calculateArea() << std::endl;
    	std::cout << p.getElevation() << std::endl;		
	}
}
```

#### 第二阶段任务

##### LineString类

设计派生类LineString，作为一种GeographicEntity，包含以下要素：

* 属性（数据）
	* ID, points, totalLength, lengthDirty
* 函数（操作）
	* 构造与析构
	* addPoint(), calculateLength (), getLength(), getPointCount (), 
* 当ID为空时输出“无效参数”

**要求**

* 绘制UML图
* 相邻两点之间计算欧式距离
* 点数少于2时， LineString的长度为0
* getElevation 提供只读访问
* render() 输出节点数和线长度。

##### Polygon类

设计派生类Polygon，作为一种GeographicEntity，包含以下要素：

* 属性（数据）
	* ID, vertices, area, perimeter, dirty
* 函数（操作）
	* 构造
	* addVertex(), calculateArea (), getPerimeter(), 
* 当ID为空时输出“无效参数”

**要求**

* 绘制UML图
* 相邻两点之间计算欧式距离
* Polygon要维护面积和周长
* 面积使用鞋带公式计算
* 周长也是遍历所有相邻边并累加距离。

##### 测试要求

* 创建 List<GeographicEntity>
* 放入 Point、LineString 和 Polygon。
* 遍历时只通过基类指针调用 displayInfo、render、getEntityType 和 calculateArea。
* 折线：(0,0)、(3,4)、(6,8)，预期长度10。
* 三角形：(0,0)、(4,0)、(0,3)，预期面积6、周长12。
* 空ID：应抛出异常。
* 外部访问私有容器：应产生编译错误。
* 添加新点后再次读取结果：应重新计算。

