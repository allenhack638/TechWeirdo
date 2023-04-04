# TechWeirdo Assessment
#Performing Breadth-First Search on Binary Tree in MongoDB using Express API

Overview
This readme provides information on how to perform a breadth-first search on a binary tree stored in the MongoDB database using an Express API. The aim is to guide users through the process of setting up and running the application.

SCHEMA of each Node:- 
![image](https://user-images.githubusercontent.com/54641339/229908056-12d4ef11-9224-4f9d-b206-04160aff9962.png)
1. root: This field will have some number if that particular node is the root element else by default it will set to undefined.
2. node: This field have the name of that particular node which could be further used to link the left and right child.
3. val: This field stores the data of a particular node.
4. left: Points to left child.
5. right: Points to right child.

Time Complexity:
 O( number of nodes(vertices) + number of children(edges) )
 
Space Complexity:
 O( 2 * number of nodes )
 
 


