---
level: "undergrad"
course: "面向对象程序设计（OOP）"
title: "第五次随堂练习"
deadline: "2026-10-23 23:59:59"
submit_link: "https://pan.hunnu.edu.cn/u/d/24e01845dc7749388ef9/"
---

## Exercise Requirements

#### 提交格式：

```
学号_姓名_第5次随堂练习/
  |- Point.cpp
  |- Point.h
  |- main.cpp
  |- PointArray.cpp
  |- PointArray.h

例：2025xxxx_张三_第5次随堂练习/
  |- Point.cpp
  |- Point.h
  |- main.cpp
  |- PointArray.cpp
  |- PointArray.h
```

### 随堂练习：用C++代码实现下面的描述

#### 一、定义一个简单的二维点类：Point

##### 详细要求

1. 在头文件Point.h中定义一个Point类，包含私有属性x坐标(x)、y坐标(y)、编号(id) ；
2. Point类的基本功能包括：
    1. 实现setCoordinates方法，设定点的xy坐标值；
    2. 实现setId方法，设定点的id值；
    3. 实现getX、getY、getId方法，分别获取点的属性值；
    4. 实现display方法，显示当前的编号与坐标信息；
    5. 实现distanceFromOrigin方法，计算当前到原点的距离


|Point|
|:-|
|- x: double|
|- y: double|
|- id: int|
|+ setCoordinates(double, double): void|
|+ segId(int): void|
|+ getX() const: double|
|+ getY() const: double|
|+ getId() const: int|
|+ display() const: void|
|+ distanceFromOrigin() const: double|

##### 参考代码

**Point.h**

```c++
#ifndef POINT_H_INCLUDE
#define POINT_H_INCLUDE

class Point{
private:
    double x;
    double y;
    int id;
public:
    void setCoordinates(double, double);
    void setId(int);
    double getX() const;
    double getY() const;
    double getId() const;
    void display() const;
    double distanceFromOrigin() const;
};

#endif
```

**Point.cpp**

```c++
#include <iostream>
#include "Point.h"

void Point::setCoordinates(double xVal, double yVal) {
    x = xVal;
    y = yVal;
}

void Point::setId(int idVal) {
    id = idVal;
}

double Point::getX() const {
    return x;
}

double Point::getY() const {
    return y;
}
double Point::getId() const {
    return id;
}
void Point::display() const {
    std::cout << "Point_" << id << ": (" << x << "," << y << ")" << std::endl;
}
double Point::distanceFromOrigin() const {
    return sqrt(x*x + y*y);
}
```

**main.cpp**

```c++
#include <iostream>
#include "Point.h"

int main() {
    std::cout << "=== 练习1.1：定义类与访问控制 ===" << std::endl;

    Point point1;
    point1.setId(1);
    point1.setCoordinates(10.5, 20.3);
    point1.display();
    // p1.x = 100; // 错误！x是私有成员，无法直接访问
    std::cout << "X坐标: " << point1.getX() << std::endl; // 正确：通过公有方法访问

    Point point2;
    point2.setId(2);
    point2.setCoordinates(30.0, 40.0);
    std::cout << "点p2到原点距离: " << point2.distanceFromOrigin() << std::endl;

    return 0;
}
```

#### 二、this指针改造

##### 详细要求

1. 使用this指针解决参数名与成员变量的冲突；
2. 加入moveBy方法，根据传入偏移量，移动当前点的位置；
3. 加入equals方法，判断当前点与某个点是否相同。

##### 参考代码

**Point.h**

```c++
#ifndef POINT_H_INCLUDE
#define POINT_H_INCLUDE

class Point{
private:
    double x;
    double y;
    int id;
public:
    void setCoordinates(double, double);
    void setId(int);
    double getX() const;
    double getY() const;
    double getId() const;
    void display() const;
    double distanceFromOrigin() const;
    Point& moveBy(double, double);
    bool equals(const Point&) const;
};

#endif
```

**Point.cpp**

```c++
#include <iostream>
#include "Point.h"

...

Point& Point::moveBy(double dx, double dy) {
    x += dx;
    y += dy;
    return *this;
}

bool Point::equals(const Point& point) const {
    if(x == point.x && y == point.y) {
        return true;
    } else {
        return false;
    }
}
```

**main.h**

```c++
#include <iostream>
#include "Point.h"

int main() {

    std::cout << "=== 练习1.2：this指针 ===" << std::endl;

    Point point1;
    point1.setId(1);
    point1.setCoordinates(10, 20);
    point1.display();
    Point point2;
    point2.setId(2);
    point2.setCoordinates(25, 35);
    point2.display();

    if (point1.equals(point2)) {
        std::cout << "point1和point2坐标相同" << std::endl;
    } else {
        std::cout << "point1和point2坐标不同" << std::endl;
    }
    point1.moveBy(5, 5).moveBy(10, 10);
    std::cout << "移动后: ";
    point1.display();

    if (point1.equals(point2)) {
        std::cout << "point1和point2坐标相同" << std::endl;
    } else {
        std::cout << "point1和point2坐标不同" << std::endl;
    }

    return 0;
}
```

#### 三、构造函数与静态变量

##### 详细要求

1. 提供3种构造函数：无参、参数为坐标、参数为点；
2. 加入static nextId变量，让类给点自动编号。

##### 参考代码

**Point.h**

```c++
#ifndef POINT_H_INCLUDE
#define POINT_H_INCLUDE

class Point{
private:
    double x;
    double y;
    int id;
    static int nextId;
public:
    Point();
    Point(double, double);
    Point(const Point&);
    void setCoordinates(double, double);
    void setId(int);
    double getX() const;
    double getY() const;
    double getId() const;
    void display() const;
    double distanceFromOrigin() const;
    Point& moveBy(double, double);
    bool equals(const Point&) const;
};
#endif
```

**Point.cpp**

```c++
#include <iostream>
#include "Point.h"

int Point::nextId = 0;
Point::Point() : x(0), y(0), id(++nextId) {}

Point::Point(double x, double y) : x(x), y(y), id(++nextId) {}
Point::Point(const Point& p) : x(p.x), y(p.y), id(++nextId) {}
...
```

**main.cpp**

```c++
#include <iostream>
#include "Point.h"

int main() {
    std::cout << "=== 练习1.3：构造函数 ===" << std::endl;

    Point point1;
    std::cout << "Point id: " << point1.getId() << std::endl;
    point1.display();

    Point point2(10, 20);
    std::cout << "Point id: " << point2.getId() << std::endl;
    point2.display();

    Point point3(point2);
    std::cout << "Point id: " << point3.getId() << std::endl;
    point2.display();
    return 0;
}
```

#### 四、定义PointArray类

##### 详细要求

1. 在头文件PointArray.h中定义一个PointArray类，内部保存点序列数据（ Point* data ）, 序列大小（ size ）, 数组名（ name ）；
2. PointArray类的基本功能包括：
    1. 实现普通构造、拷贝构造、拷贝赋值、析构等函数；
    2. 实现setPoint方法，指定下标写入点；
    3. 实现display方法，显示所有点；
    4. 实现getPoint方法，根据下标获取点；

|PointArray|
|:-|
|- data: Point*|
|- size: int|
|- name: string|
|+ PointArray()|
|+ PointArray(int, string)|
|+ PointArray(const PointArray&)|
|+ ~PointArray()|
|+ setPoint(const Point&, int): void|
|+ getPoint(int): Point&|
|+ display() const: void|

##### 参考代码

**PointArray.h**

```c++
#ifndef POINTARRAY_H_INCLUDE
#define POINTARRAY_H_INCLUDE
class PointArray{
private:
    Point* data;
    int size;
    std::string name;
public:
    PointArray();
    PointArray(int, std::string);
    PointArray(const PointArray&);
    ~PointArray();
    PointArray& copyPointArray(const PointArray&);
    void setPoint(const Point&, int);
    Point& getPoint(int);
    void display() const;
};

#endif
```

**PointArray.cpp**

```c++
#include <iostream>
#include "Point.h"
#include "PointArray.h"

PointArray::PointArray(): data(nullptr), size(-1), name("未命名") {}
PointArray::PointArray(int size, std::string name): data(new Point[size]), size(size), name(name){}
PointArray::PointArray(const PointArray& pa): data(new Point[pa.size]), size(pa.size), name(pa.name){
     for (int i = 0; i < size; i++) {
          data[i] = pa.data[i];
     }
}
PointArray::~PointArray(){delete[] data;}
PointArray& PointArray::copyPointArray(const PointArray& other){
     if (this == &other) return *this;
     Point* newData = new Point[other.size];
     for(int i=0;i<other.size;i++) {
          newData[i] = other.data[i];
     }
     delete[] data;
     data = newData;
     size = other.size;
     return *this;
}
void PointArray::setPoint(const Point& p, int index) {
     if (index >= size) return;
     data[index] = p;
}
Point& PointArray::getPoint(int index){
     if (index >= size) throw std::out_of_range("PointArray::getPoint: 下标越界");
     return data[index];
}
void PointArray::display() const{
     for(int i=0;i<size;i++) {
          data[i].display();
     }
}
```

**main.cpp**

```c++
#include <iostream>
#include "Point.h"
#include "PointArray.h"

int main() {

    std::cout << "=== 练习1.4：ArrayPoint类 ===" << std::endl;

    Point point1;
    Point point2(10, 20);
    Point point3(point2);

    PointArray arr1;
    PointArray arr2(4, "点数组2");

    arr2.setPoint(point2, 0);
    arr2.setPoint(point3, 1);
    PointArray arr3(arr2);

    arr3.display();
    return 0;
}
```
