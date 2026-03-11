import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  searchFocused = false;
  activeCard: number | null = null;

  recipes = [
    { emoji: '🍝', name: 'Cacio e Pepe', time: '20 min', tag: 'Italian' },
    { emoji: '🥘', name: 'Chicken Tagine', time: '45 min', tag: 'Moroccan' },
    { emoji: '🍜', name: 'Tonkotsu Ramen', time: '3 hrs', tag: 'Japanese' },
    { emoji: '🥗', name: 'Niçoise Salad', time: '15 min', tag: 'French' },
    { emoji: '🫕', name: 'Shakshuka', time: '25 min', tag: 'Middle Eastern' },
    { emoji: '🍲', name: 'Dal Makhani', time: '1 hr', tag: 'Indian' },
  ]

  categories = [
    'Breakfast', 'Pasta', 'Soups', 'Vegetarian',
    'Quick Meals', 'Baking', 'Grilling', 'Desserts',
  ];

  stats = [
    { num: '50K+', label: 'Recipes' },
    { num: '120+', label: 'Cuisines' },
    { num: '2M+',  label: 'Cooks' },
    { num: '$0',   label: 'Forever' },
  ];

  footerLinks = ['About', 'Submit a Recipe', 'Privacy', 'Contact'];
}
