#include "lists.h"

/**
 * palindrom -  Check if a singly linked list is a palindrome
 * @head: head of the list
 * Return: 0 or 1
 */
int is_palindrome(listint_t **head)
{
	if (head == NULL || *head == NULL)
		return (1);
	return (aux_palind(head, *head));
}

/**
 * aux_palind - funct to know if is palindrome
 * @head: head of the list
 * @end: end list
 */
int aux_palind(listint_t **head, listint_t *end)
{
	if (end == NULL)
		return (1);
	if (aux_palind(head, end->next) && (*head)->n == end->n)
	{
		*head = (*head)->next;
		return (1);
	}
	return (0);
}
