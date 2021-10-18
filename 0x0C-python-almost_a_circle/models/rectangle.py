#!/usr/bin/python3
"""
Contains the "Rectangle" class
"""

from models.base import Base


class Rectangle(Base):

    def __init__(self, width, height, x=0, y=0, id=None):
        """Initializes the rectangle"""
        super().__init__(id)
        self.__width = width
        self.__height = height
        self.__x = x
        self.__y = y

    @property
    def width(self):
        """getter of width"""
        return self.__width

    @property
    def height(self):
        """getter of height"""
        return self.__height

    @property
    def x(self):
        """getter of x"""
        return self.__x

    @property
    def y(self):
        """getter of y"""
        return self.__y

    @width.setter
    def width(self, value):
        """setter of width"""
        if type(value) is not int:
            raise TypeError("Width must be an integer")
        if value <= 0:
            raise ValueError("Width must be > 0")
        self.__width = value

    @height.setter
    def height(self, value):
        """setter of height"""
        if type(value) is not int:
            raise TypeError("Height must be an integer")
        if value <= 0:
            raise ValueError("Height must be > 0")
        self.__height = value

    @x.setter
    def x(self, value):
        """setter of x"""
        if type(value) is not int:
            raise TypeError("X must be an integer")
        if value < 0:
            raise ValueError("X must be >= 0")
        self.__x = value

    @y.setter
    def y(self, value):
        """setter of y"""
        if type(value) is not int:
            raise TypeError("Y must be an integer")
        if value < 0:
            raise ValueError("Y must be >= 0")
        self.__y = value

    def area(self):
        """calculates the area of the rectangle"""
        return self.__width * self.__height

    def display(self):
        """print a display of the rectangle"""
        print(("\n" * self.__y) +
              "\n".join(((" " * self.__x) + ("#" * self.__width))
                        for i in range(self.__height)))

    def __str__(self):
        """informal string representation of the rectangle"""
        return "[Rectangle] ({}) {}/{} - {}/{}".format(self.id, self.__x, self.__y, self.__width, self.__height)

    def update(self, *args, **kwargs):
        """updates multiple attributes"""
        if len(args):
            for i, a in enumerate(args):
                if i == 0:
                    self.id = a
                elif i == 1:
                    self.width = a
                elif i == 2:
                    self.height = a
                elif i == 3:
                    self.x = a
                elif i == 4:
                    self.y = a
        else:
            if "id" in kwargs:
                self.id = kwargs["id"]
            if "width" in kwargs:
                self.width = kwargs["width"]
            if "height" in kwargs:
                self.height = kwargs["height"]
            if "x" in kwargs:
                self.x = kwargs["x"]
            if "y" in kwargs:
                self.y = kwargs["y"]

    def to_dictionary(self):
        """dictionary representation of a Rectangle"""
        d = {}
        d["id"] = self.id
        d["width"] = self.width
        d["height"] = self.height
        d["x"] = self.x
        d["y"] = self.y
        return d