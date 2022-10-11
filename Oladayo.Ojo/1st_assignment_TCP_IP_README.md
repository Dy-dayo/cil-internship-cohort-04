## First Assignment
# TCP/IP

# The TCP/IP MODEL 
    TCP/IP stands for Transmission Control Protocol / Internet Protocol. TCP/IP is a model that offers
highly reliable and end-to-end byte stream over an unreliable internet.

TCP/IP is a layered server architecture system in which each layer is defined according to a specific function.The functionality of TCP/IP model is divided into four(4) layers, and each layer includes specific protocols. All four layers work collaboratively to transmit the data from one layer to another. The four layers are:

 * Application Layer
 * Transport Layer
 * Internet Layer
 * Network Layer

 ### Application Layer.
This layer is same as that of OSI model and performs the following functions:
* It provides different services such as manipulation of information in several ways transfering files through and fro.
* The functions such as LOGIN or password checking are also performed at the application layer.

### Transport Layer.
It does the same functions as that of transport layer in OSI model. Here are the key points regarding transport layer:
* It uses TCP and UDP protocol for end to end transmission.
* TCP is reliable and connection oriented protocol.
* TCP also handles flow control.
* The UDP is not reliable and a connection less protocol also does not perform flow control.

### Internet Layer.
The internet layer has the task of exchanging datagrams across network boundaries. It is therefore also referred to as the layer that establishes internet working.This layer defines the addressing and routing structures used for the TCP/IP protocol suite. The primary protocol in this scope is the Internet Protocol, which defines IP addresses. Its function in routing is to transport datagrams to the next IP router that has the connectivity to a network closer to the final data destination.

The function of this layer is to allow the host to insert packets into network and then make them travel independently to the destination. However, the order of receiving the packet can be different from the sequence they were sent.

### The Network Access Layer / Host-to-Network Layer.
The Network Access layer of the TCP/IP model corresponds with the Data Link and Physical layers of the OSI reference
model. It defines the protocols and hardware required to connect a host to a physical network and to deliver data across it. This protocol varies from host to host and network to network. Packets from the Internet layer are sent down the Network Access layer for delivery within the physical network.

## FEATURES OF THE TCP/IP MODEL
    Here, are the essential characteristics of TCP IP protocol:
1. Support for a flexible TCP/IP architecture.
2. Adding more system to a network is easy.
3.  In TCP IP protocols suite, the network remains intact until the source, and destination machines were functioning properly.
4. TCP is a connection-oriented protocol.
5. TCP offers reliability and ensures that data which arrives out of sequence should put back into order.
6. TCP allows you to implement flow control, so sender never overpowers a receiver with data.

## DIFFRENCES AND SIMILARITIES BETWEEN THE OSI AND TCP/IP MODEL
The TCP/IP and OSI are network reference models. The process of developing both models began in the early 1970s and ended in the late 1970s. Both models were published in the early 1980s. Manufacturers manufactured devices to support one model or both models in the 1990s. By the late 1990s, the TCP/IP model became a common option and the OSI model was rejected due to a slower formal standardization process than the TCP/IP model. Leading manufacturers abandoned their proprietary networking model in favor of the TCP/IP model in the 2000s. Nowadays, only the TCP/IP model is used. Almost all modern computer networks are built using the TCP/IP model. All modern networking devices support the TCP/IP model. 

## Similarities between the TCP/IP model and the OSI model
* Both provide a framework for creating and implementing networking standards.
* Both models simplify the troubleshooting process by dividing complex functions into simpler components
* 


## Differences between the OSI model and the TCP/IP model

###   OSI MODEL                       | TCP/IP
--------------------------------------|---------------------------------
 The OSI Layer model has seven layers | The TCP/IP model has four layers.
                                      |
 The OSI layer model is not common    | The TCP/IP model is more commonly used
                                      |
 The OSI model uses three separate    | The TCP/IP model uses Application layer to define all.
 layers Application, Presentation, and|
 Session to define the functionalities|
 of upper layers.                     |
                                      |  
 The OSI model uses the Network layer | The TCP/IP model uses the Internet layer 
 to define routing                    |







