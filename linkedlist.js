<script>
// javascript program to merge K sorted doubly
// linked list in sorted order // A linked list node
	class Node {
	constructor(){
		this.data = 0;
		this.next = null;
		this.prev = null;
		}
	}

	// Given a reference (pointer to pointer) to the head
	// Of a DLL and an int, appends a new node at the end
	function append( head_ref , new_data) 
	{
		// Allocate node
		new_node = new Node();

		last = head_ref;

		// Put in the data
		new_node.data = new_data;

		// This new node is going to be the last
		// node, so make next of it as null
		new_node.next = null;

		// If the Linked List is empty, then make
		// the new node as head */
		if (head_ref == null) {
			new_node.prev = null;
			head_ref = new_node;
			return head_ref;
		}

		// Else traverse till the last node
		while (last.next != null)
			last = last.next;

		// Change the next of last node
		last.next = new_node;

		// Make last node as previous of new node
		new_node.prev = last;

		return head_ref;
	}

	// Function to print the list
	function printList( node) {
		last;

		// Run while loop unless node becomes null
		while (node != null) {
			document.write(node.data + " ");
			last = node;
			node = node.next;
		}
	}

	// Function to merge two
	// sorted doubly linked lists
	function mergeList( p, q) {
		s = null;

		// If any of the list is empty
		if (p == null || q == null) {
			return (p == null ? q : p);
		}

		// Comparison the data of two linked list
		if (p.data < q.data) {
			p.prev = s;
			s = p;
			p = p.next;
		} else {
			q.prev = s;
			s = q;
			q = q.next;
		}

		// Store head pointer before merge the list
		head = s;
		while (p != null && q != null) {
			if (p.data < q.data) {

				// Changing of pointer between
				// Two list for merging
				s.next = p;
				p.prev = s;
				s = s.next;
				p = p.next;
			} else {

				// Changing of pointer between
				// Two list for merging
				s.next = q;
				q.prev = s;
				s = s.next;
				q = q.next;
			}
		}

		// Condition to check if any anyone list not end
		if (p == null) {
			s.next = q;
			q.prev = s;
		}
		if (q == null) {
			s.next = p;
			p.prev = s;
		}

		// Return head pointer of merged list
		return head;
	}

	// Function to merge all sorted linked
	// list in sorted order
	function mergeAllList( head , k) {
		finalList = null;
		for (i = 0; i < k; i++) {

			// Function call to merge two sorted
			// doubly linked list at a time
			finalList = mergeList(finalList, head[i]);
		}

		// Return final sorted doubly linked list
		return finalList;
	}

	// Driver code
	
		var k = 3;
		head = Array(k).fill(null);
	
		// Loop to initialize all the lists to empty
		for (i = 0; i < k; i++) {
			head[i] = null;
		}

		// Create first doubly linked List
		// List1 . 1 <=> 5 <=> 9
		head[0] = append(head[0], 1);

		head[0] = append(head[0], 5);

		head[0] = append(head[0], 9);

		// Create second doubly linked List
		// List2 . 2 <=> 3 <=> 7 <=> 12
		head[1] = append(head[1], 2);

		head[1] = append(head[1], 3);

		head[1] = append(head[1], 7);

		head[1] = append(head[1], 12);

		// Create third doubly linked List
		// List3 . 8 <=> 11 <=> 13 <=> 18
		head[2] = append(head[2], 8);

		head[2] = append(head[2], 11);

		head[2] = append(head[2], 13);

		head[2] = append(head[2], 18);

		// Function call to merge all sorted
		// doubly linked lists in sorted order
		finalList = mergeAllList(head, k);

		// Print final sorted list
		printList(finalList);

// This code is contributed by umadevi9616
</script>
