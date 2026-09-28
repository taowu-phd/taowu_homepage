---
level: "undergrad"
course: "面向对象程序设计（OOP）"
title: "第三次随堂练习"
deadline: "2026-09-30 23:59:59"
submit_link: "https://pan.hunnu.edu.cn/u/d/8e2350701ca24ae2bd01/"
---

## Exercise Requirements

#### 提交格式：

```
学号_姓名_第3次随堂练习/
  |- 随堂练习一_Main.cpp
  |- 随堂练习二_POI.java
  |- 随堂练习二_Main.java

例：2025xxxx_张三_第2次随堂练习/
  |- 随堂练习一_Main.cpp
  |- 随堂练习二_POI.java
  |- 随堂练习二_Main.java
```

### 随堂练习一
用C++代码实现下面的描述

1. 定义POI点数据：
   * poi_1：坐标(114.352, 30,593)、名称(图书馆)、类型(教育)
   * poi_2：坐标(114.358, 30,590)、名称(食堂)、类型(餐饮)
2. 实现POI的操作函数
   * 显示POI信息
   * （自己给定变量值）平移点
   * 计算POI之间的（欧式）距离
3. 执行操作

#### 参考代码

##### Main.cpp:

```c++
#include <cmath>
#include <iostream>
#include <string>

class POI {
public:
  double x;
  double y;
  std::string name;
  std::string type;

  void display() const {
    std::cout << name << "(" << x << "," << y << ")" << type << std::endl;
  }

  void move(double dx, double dy) {
    x += x;
    y += y;
  }

  double distanceTo(const POI& other) const {
    const double dx = x - other.x;
    const double dy = y - other.y;
    return std::sqrt(dx*dx + dy*dy);
  }
};

int main() {
  POI poi1{114.352, 30.593, "图书馆", "教育"};
  POI poi2{114.358, 30.590, "食堂", "餐饮"};

  poi1.display();
  poi2.display();
  poi1.move(0.001, -0.002);
  std::cout << poi1.distanceTo(poi2) << std::endl;
}
```

### 随堂练习二
用C++代码实现下面的描述

1. 定义POI点数据：
   * poi_1：坐标(114.352, 30,593)、名称(图书馆)、类型(教育)
   * poi_2：坐标(114.358, 30,590)、名称(食堂)、类型(餐饮)
2. 实现POI的操作函数
   * 显示POI信息
   * （自己给定变量值）平移点
   * 计算POI之间的（欧式）距离
3. 执行操作

#### 参考代码

##### POI.java

```java
public class POI {
  double x;
  double y;
  String name;
  String type;

  void display() {
    System.out.println(name + "(" + x + "," + y + ")" + type);
  }

  void move(double dx, double dy) {
    x += dx;
    y += dy;
  }

  double distanceTo(POI other) {
    double dx = x - other.x;
    double dy = y - other.y;
    return Math.sqrt(dx*dx + dy*dy);
  }
}
```

##### Main.java

```java
public class Main {
  public static void main(String[] args) {
    POI poi1 = new POI();
    poi1.x = 114.352;
    poi1.y = 30.593;
    poi1.name = "图书馆";
    poi1.type = "教育";

    POI poi2 = new POI();
    poi2.x = 114.358;
    poi2.y = 30.590;
    poi3.name = "食堂";
    poi4.type = "餐饮";

    poi1.display();
    poi2.display();
    poi1.move(0.001, -0.002);
    System.out.println(poi1.distanceTo(poi2));
  }
}
```