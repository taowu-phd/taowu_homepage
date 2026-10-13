---
level: "undergrad"
course: "面向对象程序设计（OOP）"
title: "第四次随堂练习"
deadline: "2026-10-16 23:59:59"
submit_link: "https://pan.hunnu.edu.cn/u/d/55422ab1e9dc4af6aa0f/"
---

## Exercise Requirements

#### 提交格式：

```
学号_姓名_第4次随堂练习/
  |- 随堂练习一_Point.cpp
  |- 随堂练习二_TestFeature.java

例：2025xxxx_张三_第4次随堂练习/
  |- 随堂练习一_Point.cpp
  |- 随堂练习二_TestFeature.java
```

### 随堂练习一：用C++代码实现下面的描述

#### 一、定义一个简单的二维点类：Point

##### 详细要求

1. 定义一个简单的二维点类Point；
2. 创建一个点对象p1；
3. 完成赋值x为1，y为2；
4. 调用display方法显示信息。

|Point|
|:-|
|+ x: double|
|+ y: double|
|+ display(): void|

##### 参考代码

```c++
#include <iostream>

class Point {
public:
    double x;
    double y;
    void display() const {
        std::cout << "坐标点：" << x << "，" << y << std::endl;
    }
};

int main() {
    Point p1;
    p1.x = 1;
    p1.y = 2;
    p1.display();

    return 0;
}

```

#### 二、添加函数isInBounds

##### 详细要求

1. 添加函数isInBounds：判断该点位置是否在某个矩形范围内；
2. 测试3种情况：内部、边界、外部。

##### 参考代码（在上一步的基础上增量）

```c++
#include <iostream>
class Point {
public:
    ...
    bool isInBounds(double minX, double minY, double maxX, double maxY) {
        return (x>=minX && x<=maxX && y >= minY && y<=maxY);
    }
};

int main() {
    ...
    if (p1.isInBounds(0,0,10,10)) {
        cout << "点在范围内" << endl;
    } else {
        cout << "点不在范围内" << endl;
    }
    ...
    return 0;
}
```

#### 三、添加move函数做传参实验

##### 详细要求

1. 添加函数moveValue：传入一个新点p2的值，与当前点累加；
2. 添加函数moveReference：传入一个新点p2的引用，与当前点累加。

##### 参考代码（在上一步的基础上增量）

```c++
#include <iostream>

class Point {
public:
    ...
    void moveValue(Point p){
        p.x += x;
        p.y += y;
    }

    void moveReference(Point& p){
        p.x += x;
        p.y += y;
    }
};

int main(){
    …
    Point p2;
    p2.x = 3;
    p2.y = 4;
    p1.moveValue(p2);
    p2.display();
    p1.moveReference(p2);
    p2.display();

    return 0;
}

```

#### 四、动态内存管理实验

##### 详细要求

1. 动态创建点数组points；
2. 分别把p1与p2放到数组内；
3. 调用数组元素的display函数；
4. 释放动态申请的空间。

##### 参考代码（在上一步的基础上增量）

```c++
int main() {
    ...
    Point* points = new Point[2];
    points[0] = p1;
    points[1] = p2;
    points[0].display();
    points[1].display();

    delete[] points;
    points = nullptr;

    return 0;
}
```

#### 五、用vector替代动态数组

##### 详细要求

1. 改用vector容器替代动态数组，创建点容器route；
2. 使用范围for循环显示所有点；
3. 清空容器。


##### 参考代码（在上一步的基础上增量）

```c++
#include <iostream>
#include <vector>

...

int main() {
    ...
    std::vector<Point> route;
    route.push_back(p1);
    route.push_back(p2);
    for (const auto& point : route) {
        point.display();
    }
    
    route.clear();

    return 0;
}

```

#### 六、函数重载

##### 详细要求

1. 添加distance：计算当前点与某个位置的距离；
2. 添加distance：计算当前点与某个点的距离；
3. 分别调用两个distance函数。


##### 参考代码（在上一步的基础上增量）

```c++

class Point {
public:
    ...
    double distance(double px, double py) const {
        double dx = x - px;
        double dy = y - py;
        return sqrt(dx*dx + dy*dy);
    }
    double distance(const Point& p) const {
        return distance(p.x, p.y);
    }
};

int main() {
    ...
    std::cout << "p1.distance(2,2): " << p1.distance(2,2) << std::endl;
    std::cout << "p1.distance(p2): " << p1.distance(p2) << std::endl;

    return 0;
}
```


#### 七、Lambda表达式

##### 详细要求

1. 使用Lambda表达式实现distance计算；
2. 调用Lambda表达式。

##### 参考代码（在上一步的基础上增量）

```c++
int main() {
    ...
    auto dist = [](const Point& a, const Point& b) {
        double dx = a.x - b.x;
        double dy = a.y - b.y;
        return sqrt(dx*dx + dy*dy);
    };
    std::cout << “dist(p1,p2): " << dist(p1,p2) << std::endl;

    return 0;
}
```

---

### 随堂练习二：用Java代码实现下面的描述

#### 一、定义一个简单的二维点类：Point

##### 详细要求
1. 定义一个简单的二维点类Point；
2. 创建一个点对象p1；
3. 完成赋值x为10，y为20；
4. 调用display方法显示信息。

|Point|
|:-|
|+ x: double|
|+ y: double|
|+ display(): void|

##### 参考代码

```java
class Point {
    public double x;
    public double y;

    public void display() {
        System.out.println("坐标点："+ x + ", " + y);
    }
}

public class TestFeature {
    public static void main (String[] args) {
        Point p1 = new Point();
        p1.x = 10;
        p1.y = 20;
        p1.display();
    }
}
```

#### 二、添加isInFirstQuadrant与isSamePosition方法

##### 详细要求

1. 添加函数isInFirstQuadrant：判断该点位置是否在第一象限；
2. 添加函数isSamePosition：判断该点位置是否与另一个点重合。


##### 参考代码（在上一步的基础上增量）

```java
class Point {
    ...
    public boolean isInFirstQuadrant() {
        return x > 0 && y > 0;
    }
    public boolean isSamePosition(Point p) {
        return x == p.x && y == p.y;
    }
}

public class TestFeature {
    public static void main(String[] args) {
        ...
        System.out.println("p1在第一象限：" + p1.isInFirstQuadrant());
        Point p2 = new Point();
        p2.x = 10;
        p2.y = 20;
        System.out.println("p1与p2重合：" + p1.isSamePosition(p2));
    }
}
```

#### 三、测试引用类型的赋值

##### 详细要求

1. 创建Point引用p3，并用p1对其进行初始化；
2. 修改p3的x值与y值；
3. 查看p1与p3的坐标。


##### 参考代码（在上一步的基础上增量）

```java
public class TestFeature {
    public static void main(String[] args) {
        ...
        Point p3 = p1;
        p3.x = 1;
        p3.y = 2;

        p1.display();
        p3.display();
}
```

#### 四、创建数组并循环遍历

##### 详细要求

1. 创建点数组points；
2. 分别把p1与p2放到数组内；
3. 使用for-each循环显示所有点。

##### 参考代码（在上一步的基础上增量）

```java
public class TestFeature {
    public static void main(String[] args) {
        ...
        Point[] points = new Point[2];
        points[0] = p1;
        points[1] = p2;

        System.out.println("length of points: " + points.length);
        for (Point p : points) {
            p.display();
        }
}

```

#### 五、方法重载

##### 详细要求

1. 添加distance：计算当前点与某个位置的距离；
2. 添加distance：计算当前点与某个点的距离；
3. 调用distance函数。

##### 参考代码（在上一步的基础上增量）

```java
class Point {
public:
    ...
    public double distance(double px, double py) {
        double dx = x - px;
        double dy = y - py;
        return Math.sqrt(dx*dx + dy*dy);
    }
    public double distance(Point p) {
        return distance(p.x, p.y);
    }
}

public class TestFeature {
    public static void main(String[] args) {
        ...
        System.out.println(p1.distance(2,2));
        System.out.println(p1.distance(p2));
    }
}
```