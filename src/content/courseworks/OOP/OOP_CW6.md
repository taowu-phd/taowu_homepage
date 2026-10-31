---
level: "undergrad"
course: "面向对象程序设计（OOP）"
title: "第六次随堂练习"
deadline: "2026-11-02 23:59:59"
submit_link: "https://pan.hunnu.edu.cn/u/d/846c309c582a4f86af39/"
---

## Exercise Requirements

#### 提交格式：

```
学号_姓名_第6次随堂练习/
  |- Point.java
  |- TestClass.java
  |- Layer.java

例：2025xxxx_张三_第6次随堂练习/
  |- Point.java
  |- TestClass.java
  |- Layer.java
```

### 随堂练习：用Java代码实现下面的描述

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

**TestClass.java**

```java
import geometry.Point;

public class TestClass {
    public static void main(String[] args) {
        System.out.println("=== 练习1.1：定义类与访问控制 ===");
        // 创建点对象
        Point point1 = new Point();
        point1.setCoordinates(10.5, 20.3);
        point1.setId(1);
        point1.display();
        // 访问控制测试
        // point1.x = 100; // 错误！x是point1的私有成员
        System.out.println("X坐标：" + point1.getX()); 
        Point point2 = new Point();
        point2.setCoordinates(30,40);
        point2.setId(2);
        point2.display();
        System.out.println("point2到原点的距离：" + point2.distanceFromOrigin());
    }
}
```

**Point.java**

```java
package geometry;

public class Point{
    private double x;
    private double y;
    private int id;

    public void setCoordinates(double x, double y) {
        this.x = x;
        this.y = y;
    }
    public void setId(int id) {
        this.id = id;
    }
    public double getX() {
        return x;
    }
    public double getY() {
        return y;
    }
    public int getId() {
        return id;
    }
    public void display() {
        System.out.println("Point:_" + id + " (" + x + "," + y + ")");
    }
    public double distanceFromOrigin() {
        return Math.sqrt(x*x + y*y);
    }
}
```


#### 二、加入新方法

##### 详细要求

1. 加入moveBy方法，根据传入偏移量，移动当前点的位置；
2. 加入equals方法，判断当前点与某个点是否相同。

**TestClass.java**
```java
import geometry.Point;

public class TestClass {
    public static void main(String[] args) {
        System.out.println("=== 练习1.2：this引用 ===");
        // 创建点对象
        Point point1 = new Point();
        point1.setCoordinates(10, 20);
        point1.setId(1);
        point1.display();
        // 链式调用
        point1.moveBy(5, 5).moveBy(10,10);
        System.out.println("移动后：");
        point1.display();
        // equals测试
        Point point2 = new Point();
        point2.setCoordinates(25, 35);
        point2.setId(2);
        point2.display();

        if (point1.equals(point2)) {
            System.out.println("两个点的坐标相同");
        } else {
            System.out.println("两个点的坐标不同");
        }
    }
}
```

**Point.java**

```java
package geometry;

public class Point{
    ...
    public Point moveBy(double dx, double dy) {
        this.x += dx;
        this.y += dy;
        return this;
    }
    public Boolean equals(Point other) {
        if (x == other.x && y == other.y) {
            return true;
        }
        return false;
    }
}
```

#### 三、构造函数与静态变量

##### 详细要求

1. 提供3种构造函数（使用this(…)形式复用）：无参、参数为坐标、参数为点；
2. 加入私有静态变量nextId变量，让类给点id自动编号；
3. 把setId()与setCoordinates()改为私有方法，支持类内部嵌套调用。


##### 参考代码

**TestClass.java**

```java
import geometry.Point;
public class TestClass {
    public static void main(String[] args) {
        System.out.println("=== 练习1.3：构造方法 ===");
        Point point1 = new Point();
        point1.display();

        Point point2 = new Point(10, 20);
        point2.display();

        Point point3 = new Point(point2);
        point3.display();

        if (point2.equals(point3)) {
            System.out.println("两个点的坐标相同");
        } else {
            System.out.println("两个点的坐标不同");
        }
    }
}
```

**Point.java**

```java
package geometry;
public class Point{
    ...
    private static int nextId;
    public Point(){
        this(0,0);
    }
    public Point(double x, double y) {
        setCoordinates(x, y);
        setId(++nextId);
    }
    public Point(Point other) {
        this(other.x, other.y);
    }
    private void setCoordinates(double x, double y) {
        this.x = x;
        this.y = y;
    }
    private void setId(int id) {
        this.id = id;
    }
    ...
}
```


#### 四、公有静态与final声明

##### 详细要求

1. 加入公有静态长量EARTH_RADIUS与COORDINATE_SYSTEM，并初始化；
2. 申明getX、getY、getId、display为final方法；
3. 加入球面距离记录sphericalDistance。

##### 参考代码

**TestClass.java**

```java

```

**Point.java**

```java

```


##### 参考代码

**TestClass.java**


```java
import geometry.Point;

public class TestClass {
    public static void main(String[] args) {
        System.out.println("=== 练习1.4：final常用法 ===");

        System.out.println("坐标系统：" + Point.COORDINATE_SYSTEM);
        System.out.println("地球半径：" + Point.EARTH_RADIUS + "KM");

        Point point1 = new Point(116.4, 39.9); 
        Point point2 = new Point(121.5, 31.2); 

        point1.display();
        point2.display();

        double dist = point1.sphericalDistance(point2);
        System.out.printf("两点间的球面距离：%.2f KM\n", dist);
    }
}
```

**Point.java**

```java
package geometry;

public class Point{
    ...
    public static final double EARTH_RADIUS = 6371.0;
    public static final String COORDINATE_SYSTEM = "WGS84";

    ...

    public double sphericalDistance(Point other) {
        double lat1 = Math.toRadians(y);
        double lat2 = Math.toRadians(other.y);
        double deltaLon = Math.toRadians(other.x - x);

        double distance = Math.acos(
            Math.sin(lat1)*Math.sin(lat2)
        ) * EARTH_RADIUS;
        return distance;
    }
}
```

#### 六、引用与复制实验

##### 详细要求

1. 先执行Point point2 = point1，修改point2，观察point1。
2. 然后实现复制构造，
    1. 写Point point3 = new Point(point)，
    2. 再修改point3，验证point1不变。
3. 最后画出引用关系图，并用一句话解释两种写法的区别。


##### 参考代码

**TestClass.java**

```java
import geometry.Point;

public class TestClass {
    public static void main(String[] args) {
        System.out.println("=== 练习1.5：引用与复制实验 ===");
        Point point1 = new Point(116.4, 39.9);
        point1.display();

        System.out.println("执行：point2 = point1");
        Point point2 = point1;
        point2.display();
        System.out.println("修改point2");
        point2.moveBy(20, 20);
        point1.display();
        System.out.println("执行：point3 = new Point(point1)");
        Point point3 = new Point(point1);
        point3.display();
        System.out.println("修改point3");
        point3.moveBy(20, 20);
        point1.display();
        point3.display();
    }
}
```


#### 七、嵌套类实现

##### 详细要求

1. Layer使用List<Point>保存点，并定义静态嵌套类Metadata。
2. 请思考addPoint应该共享传入Point，还是复制一份Point。
3. 两种设计都可以，但必须明确语义。

##### 参考代码

**TestClass.java**

```java
import geometry.Point;
import geometry.Layer;

public class TestClass {
    public static void main(String[] args) {
        System.out.println("=== 练习1.6：进阶任务 ===");

        Layer layer = new Layer(1001, "城市POI", "城市兴趣点数据集", "张三", "2026-10-23");
        layer.addPoint(new Point(116.4, 39.9));
        layer.addPoint(new Point(121.5, 31.2));
        layer.addPoint(new Point(113.3, 23.1));
        layer.addPoint(new Point(114.3, 33.8));
        layer.addPoint(new Point(122.2, 20.2));
        layer.addPoint(new Point(113.5, 19.3));

        System.out.println();
        layer.displayInfo();

        System.out.println();
        layer.displayData();
    }
}
```

**Layer.java**

```java
package geometry;
import java.util.ArrayList;
public class Layer {
    private String name;
    private int id;
    private ArrayList<Point> data;
    private Metadata metadata;

    class Metadata {
        private String description;
        private String author;
        private String createDate;

        public Metadata(String description, String author, String createDate) {
            this.description = description;
            this.author = author;
            this.createDate = createDate;
        }
        public void display() {
            System.out.println("图层ID：" + id);
            System.out.println("图层名称：" + name);
            System.out.println("描述信息：" + description);
            System.out.println("作者：" + author);
            System.out.println("创建日期：" + createDate);
        }
        public String getDescription() {
            return description;
        }
    }

    public Layer(int id, String name, String desc, String author, String date) {
        this.id = id;
        this.name = name;
        this.data = new ArrayList<>();
        this.metadata = new Metadata(desc, author, date);
    }

    public void addPoint(Point point) {
        data.add(point);
    }

    public void displayInfo() {
        System.out.println("图层信息：");
        metadata.display();
        System.out.println("数据量：" + data.size());
    }

    public void displayData() {
        System.out.println("图层 \"" + name + "\" 的所有数据：");
        for (Point point : data) {
            System.out.print(" ");
            point.display();
        }
    }
}
```
