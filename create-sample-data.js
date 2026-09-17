// Quick script to add sample data for the Campus Concierge demo
// Run this in the browser console while logged into the app

import { db } from './lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth } from './lib/firebase';

async function createSampleData() {
    const currentUser = auth.currentUser;
    if (!currentUser) {
        console.error('Please login first!');
        return;
    }

    try {
        // 1. Create a sample ride
        const ridesRef = collection(db, 'rides');
        await addDoc(ridesRef, {
            hostId: 'demo-user-1',
            hostName: 'Rahul Kumar',
            rideType: 'offer',
            from: 'Block B',
            to: 'Cultural Fest Venue',
            date: new Date().toISOString().split('T')[0],
            time: '6:40 PM',
            totalSeats: 4,
            availableSeats: 3,
            fare: 50,
            notes: 'Leaving right after class',
            carModel: 'White Swift - KA01AB1234',
            participants: ['demo-user-1'],
            passengers: [],
            status: 'open',
            createdAt: serverTimestamp()
        });
        console.log('✓ Sample ride created');

        // 2. Create a sample event
        const eventsRef = collection(db, 'events');
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        await addDoc(eventsRef, {
            title: 'Cultural Fest 2025',
            description: 'Annual cultural festival with music, dance, and food',
            date: tomorrow.toISOString().split('T')[0],
            time: '7:00 PM',
            location: 'Main Auditorium',
            organizerId: currentUser.uid,
            organizer: currentUser.displayName || 'Event Organizer',
            interested: [],
            createdAt: serverTimestamp()
        });
        console.log('✓ Sample event created');

        // 3. Create a sample post with "Project X"
        const postsRef = collection(db, 'posts');
        await addDoc(postsRef, {
            uid: currentUser.uid,
            userId: currentUser.uid,
            type: 'text',
            content: 'Project X Update: The meeting location has been changed from the Library to the Canteen. Please bring your presentation slides. Deadline remains December 25th.',
            authorName: currentUser.displayName || 'Project Lead',
            authorPic: currentUser.photoURL || '',
            createdAt: serverTimestamp(),
            likes: 0,
            comments: 0,
            reactions: {},
            reactionCounts: { like: 0, dislike: 0, love: 0, laugh: 0, support: 0 }
        });
        console.log('✓ Sample post created');

        console.log('🎉 All sample data created successfully!');
        console.log('Now try the Campus Concierge again!');
    } catch (error) {
        console.error('Error creating sample data:', error);
    }
}

// Run it
createSampleData();
